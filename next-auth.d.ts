import type { JWT } from "next-auth/jwt"
import type { User } from "next-auth"
import type { AdapterUser } from "@auth/core/adapters"

interface SessionUser {
  isAdmin: boolean
}

declare module "next-auth/jwt" {
  interface JWT extends SessionUser {}
}

declare module "next-auth" {
  interface User extends SessionUser {}
}

declare module "@auth/core/adapters" {
  interface AdapterUser extends SessionUser {}
}
