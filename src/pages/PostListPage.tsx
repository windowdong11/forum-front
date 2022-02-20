import Stack from "@mui/material/Stack"
import { Suspense } from "react"
import apis from "../apis/Apis"
import { Get_PostList_Res } from "../apis/types/response/Get_PostList"
import Loading from "../componentes/Loading"
import PostItem from "../componentes/PostItem"

interface PostListProps {
  postlistReader : () => Get_PostList_Res | undefined
}

function PostList(props: PostListProps) {
  const res = props.postlistReader()
  if (!res)
    return <div>No posts.</div>
  const posts = res.posts
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