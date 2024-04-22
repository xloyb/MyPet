import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnImgSrc = nextUrl.pathname.startsWith('/img');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; 
      } else if (isLoggedIn && !isOnImgSrc) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], 
} satisfies NextAuthConfig;