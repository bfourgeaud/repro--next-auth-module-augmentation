import { DefaultUser, DefaultSession } from "next-auth"

type SessionUser = {
  isAdmin: boolean
}

declare module "@auth/core/jwt" {
  interface JWT extends SessionUser {}
}

declare module "@auth/core" {
  interface Session {
    user: SessionUser & DefaultSession["user"]
  }

  interface User extends DefaultUser, SessionUser {}
}
declare module "@auth/core/adapters" {
  interface AdapterUser extends SessionUser {}
}
