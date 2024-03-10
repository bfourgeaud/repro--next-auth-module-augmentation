import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"

export const config = {
  providers: [GitHub],
  basePath: "/auth",
  callbacks: {
    jwt({ token, session, user, trigger }) {
      if (trigger === "update") token.name = session.user.name

      if (user) {
        token.id = user.id
        token.isAdmin = user.isAdmin
      }

      if (trigger === "update") {
        token.companyId = session.user.companyId
      }

      return token
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...token,
        },
      }
    },
    authorized: ({ auth }) => {
      const isLoggedIn = !!auth?.user
      const isAdmin = auth?.user?.isAdmin

      return !!auth?.user
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
