import axios from "axios"

const getAllPost = async () => {
  const response = await axios.get("/api/post")
  return response.data
}

const addPost = async (data: { content: any; title: string; previewImage?: string; authorId: string }) => {
  const response = await axios.post("api/post", data)
  return response.data
}

const postService = {
  addPost,
  getAllPost,
}

export default postService
