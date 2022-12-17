// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../lib/prismadb'
import Pusher from 'pusher'
import pusherServer from '../../lib/pusherServer'
import { Post } from '@prisma/client'

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const pusherServer = new Pusher({
  appId: "1526236",
  key: "fbc75136973291e9f2cc",
  secret: "bd02f2396cfe065597cc",
  cluster: "eu",
  useTLS: true
})
  if (req.method === 'POST') {
    const { previewImage, content, title, authorId } = req.body as Post
    
   
    
    try {
     const user = await client.user.findUnique({
  where: {
    email: authorId,
  },
})
      const post = await client.post.create({
        data: {
        //@ts-ignore
          content,
          previewImage,
          title,
          authorId: user.id,
          likes:1
  }
      }) 
      pusherServer.trigger("my-channel", "my-event", {
  message: "hello world"
});
      res.status(200).json(post)
    
    } catch (error) {
      console.log(error)
      res.status(404).json({ error: 'Something went wrong' })
    }

    
     
    // Process a POST request
  } else {
    // Handle any other HTTP method
    try {
      const posts = await client.post.findMany({
        select: {
          title: true,
          previewImage: true,
          content: true,
          author:true
        }
        
      })

     res.status(200).json(posts)
    } catch (error) {
    
      res.status(404).json({ error: 'Something went wrong' })
    }
    
  }
  
}

export default post
