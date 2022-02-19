import { baseApi } from "../BaseAPI";
import D_Post, { post_dateTypes, Post_DateTypes, R_Post } from "../Type_Post";

// export const postList = ['created_date', 'updated_date'] as const
// export type Post_DateTypes = (typeof post_dateTypes)[number]
// export const isPost_DateTypes = (x: any): x is Post_DateTypes => post_dateTypes.includes(x)

type Picker = '_id' | 'author' | 'title' | 'tags' | Post_DateTypes
type PostItem = Pick<R_Post, Picker>
interface PostList_Res {
  posts: PostItem[]
}

export type GetPostList = Pick<D_Post, Picker>[]

export default async function getPostList() : Promise<GetPostList> {
  return baseApi<PostList_Res>('/post/list')
    .then(res => res.posts.map(post => ({
      ...post,
      ...post_dateTypes.reduce(
        (prev, key) => ({
          ...prev,
          [key]: new Date(post[key])
        }),
        {} as Record<Post_DateTypes, Date>)
    })))
}