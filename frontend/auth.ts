import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { User as UserModel } from './app/lib/models';
import bcrypt from 'bcrypt';
import { connectToDB } from './app/lib/utils';

// Define the CustomUser interface
interface CustomUser {
  _id: string;
  username: string;
  email: string;
  img?: string;
  isAdmin: boolean;
  isTeam: boolean;
  phone?: string;
  address?: string;
}

async function getUser(username: string): Promise<UserModel | undefined> {
  try {
    connectToDB();
    const user = await UserModel.findOne({ username: username });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(3) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser: CustomUser = user;
        token._id = customUser._id;
        token.username = customUser.username;
        token.email = customUser.email;
        token.img = customUser.img || '';
        token.isAdmin = customUser.isAdmin;
        token.isTeam = customUser.isTeam;
        token.phone = customUser.phone || '';
        token.address = customUser.address || '';
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.img = token.img || '';
        session.user.isAdmin = token.isAdmin;
        session.user.isTeam = token.isTeam;
        session.user.phone = token.phone || '';
        session.user.address = token.address || '';
      }
      return session;
    },
  },
});
