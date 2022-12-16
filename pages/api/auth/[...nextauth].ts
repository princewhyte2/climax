import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"
import { User } from '@prisma/client'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      httpOptions: {
        timeout: 40000,
      },
    }),
    CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      
      const user:User|null = await prisma.user.findUnique({
        where: {
          email: credentials?.username,
         
        }
      })

     
     
      

      if (user && user.password === credentials?.password) {
      
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  })
  ],
   pages: {
    signIn: "/login",
  },
})
