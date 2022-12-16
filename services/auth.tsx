import axios from "axios"

const registerUser = async (data: { email: string; password: string; name: string }) => {
  const response = await axios.post("/api/user/register", data)
  return response.data
}

const authService = {
  registerUser,
}

export default authService
