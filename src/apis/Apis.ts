import { wrap } from "module"
import getPost from "./get/getPost"
import getPostList from "./get/getPostList"
import wrapPromise from "./PromiseWrapper"
import createPost, { CreatePostParams, isCreatePostFormValid } from './post/createPost';
import Post from "./types/models/Post";

const apis = {
  get: {
    //* Always wrap with wrapPromise(). For using Suspense.
    Post: (post_id: Post['_id']) => ({ post: wrapPromise(getPost(post_id))}),
    PostList : () => ({posts: wrapPromise(getPostList())}),
  },
  post: {
    CreatePost: createPost,
  }
}

export default apis