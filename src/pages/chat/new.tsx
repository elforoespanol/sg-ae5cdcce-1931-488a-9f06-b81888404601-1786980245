import { useEffect } from "react";
import { useRouter } from "next/router";

export const dynamic = "force-dynamic";

export default function NewChatRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/chat");
  }, [router]);
  
  return null;
}