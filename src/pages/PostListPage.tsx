import Stack from "@mui/material/Stack"
import { Suspense } from "react"
import apis from "../apis/Apis"
import Loading from "../componentes/Loading"
import PostItem from "../componentes/PostItem"
import {GetPostList} from "../apis/get/getPostList"

interface PostListProps {
  postlistReader : () => GetPostList | undefined
}

function PostList(props: PostListProps) {
  const posts = props.postlistReader()
  if (!posts)
    return <div>No posts.</div>
  return (
    <Stack spacing={2}>
      {posts.map((post, idx) => <PostItem {...post} key={idx}/>)}
    </Stack>
  )
}

export default function PostListWrapper() {

  return (
    <Suspense fallback={<Loading />}>
      {/* {posts.map(post => <PostItem {...post}/>)} */}
      {/* ! experimental */}
      <PostList postlistReader={apis.get.PostList().posts.read}/>
    </Suspense>
  )
}