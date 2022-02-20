import { baseApi } from "../BaseAPI";
import { Get_PostList_Res } from "../types/response/Get_PostList";

export default async function getPostList() : Promise<Get_PostList_Res> {
  return baseApi<Get_PostList_Res>('/post/list').then(res => {
    if(!res){
      alert('Server not working.')
      throw new Error('Server Error')
    }
    return res
  })
}