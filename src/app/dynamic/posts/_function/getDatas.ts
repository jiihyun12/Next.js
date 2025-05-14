import { Post } from "../_type/post"

export const getDatas = async (fetchURL: string):Promise<Post[]> => {
  const response = await fetch(fetchURL)
  const datas = await response.json()
  return datas
}

export const getData = async (fetchURL: string):Promise<Post> => {
  const response = await fetch(fetchURL)
  const data = await response.json()
  return data
}