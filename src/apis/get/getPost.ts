
import { baseApi } from '../BaseAPI';
import Post from '../types/models/Post';
import Get_Post_Res, { PostRes_Raw_to_Data } from '../types/response/Get_Post';

export default async function getPostbyId(id: string) {
  return baseApi<Get_Post_Res>(`post/${id}`)
    .then(res => {
      if(res.post === null) return null
      return PostRes_Raw_to_Data(res.post) 
    })
}