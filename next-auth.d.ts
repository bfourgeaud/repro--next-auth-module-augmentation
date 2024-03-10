import "next-auth"

type SessionUser = {
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
