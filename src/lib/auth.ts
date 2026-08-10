import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/pr
...
;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};