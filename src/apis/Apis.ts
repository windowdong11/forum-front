import { wrap } from "module"
import getPost from "./get/getPost"
import getPostList from "./get/getPostList"
import wrapPromise from "./PromiseWrapper"
import D_Post from "./Type_Post"
import createPost, { CreatePostParams, isCreatePostFormValid } from './post/createPost';

const apis = {
  get: {
    //* Always wrap with wrapPromise(). For using Suspense.
    Post: (post_id: D_Post['_id']) => ({ post: wrapPromise(getPost(post_id))}),
    PostList : () => ({posts: wrapPromise(getPostList())}),
  },
  post: {
    CreatePost: createPost,
  }
}

export default apis