
import { baseApi } from '../BaseAPI';
import D_Post, { Post_DateTypes, post_dateTypes, R_Post } from '../Type_Post';

interface Post_Res {
  post: R_Post | null
}

export default async function getPostbyId(id: string): Promise<D_Post | null> {
  return baseApi<Post_Res>(`post/${id}`)
    .then(res => {
      if(res.post === null) return null
      return {
        ...res.post,
        ...post_dateTypes.reduce(
          (prev, key) => ({
            ...prev,
            [key]: new Date(res.post![key])
          }),
          {}
        ) as Pick<D_Post, Post_DateTypes>
      } as D_Post
    })
}