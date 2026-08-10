import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (_client) return _client;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  if (!supabaseUrl || !serviceRoleKey) {
    console.warn("[Supabase] Missing environment variables — client not initialized");
    return null;
  }

  try {
    _client = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    return _client;
  } catch (err) {
    console.error("[Supabase] Failed to create client:", err);
    return null;
  }
}

// Backward-compatible lazy proxy — never throws at import time
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_, prop: string | symbol) {
    const client = getSupabaseAdmin();
    if (!client) {
      return () => Promise.resolve({ data: null, error: new Error("Supabase not configured") });
    }
    return (client as any)[prop];
  },
});