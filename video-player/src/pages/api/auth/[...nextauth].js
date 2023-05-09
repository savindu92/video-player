import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "../../../models/user";
import bcrypt from "bcryptjs";
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        dbConnect();

        const { email, password } = credentials;

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid Email");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  /* TODO add property role to user session for role base authentification
  async authorize(credentials, req) {
    const res = fetchUserInfo(credentials.opt)
    if(res.ok) return {user: { role: 'admin' } } 
   
    return null
   },
   callbacks: {
   
    async jwt({ token, user }) {
     
     return { ...token, role: user.role }
    },
     async session({ session, user, token }) {
   
     return { ...session, role: token.role }
    },
  },
  */
  secret: process.env.NEXTAUTH_SECRET,
  
});