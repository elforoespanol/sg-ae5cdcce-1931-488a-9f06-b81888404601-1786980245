import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      level?: string;
      role?: string;
    };
  }

  interface User {
    level?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    level?: string;
    role?: string;
  }
}