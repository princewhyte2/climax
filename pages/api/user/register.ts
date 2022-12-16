// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../lib/prismadb"
const register = async(req: NextApiRequest, res: NextApiResponse) => {
      const { email, password,name } = req.body

  try {
    // Use the Prisma client to create a new user in the database
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name
      },
    })
    

    // Send a success response with the user data
    res.status(200).json({ user })
  } catch (error: any) {
    console.log('err',error)
    // Send an error response if something went wrong
    res.status(500).json({ error: error.message })
  }
 
}

export default register
