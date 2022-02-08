import { Suspense } from "react"
import { useParams } from "react-router-dom"
import apis from "../apis/Apis"
import Loading from "../componentes/Loading"
import Post from "../componentes/Post";

const PostWrapper = () => {
    const {post_id} = useParams<{post_id: string}>()
    if(!post_id) throw new Error('no post_id')
    const postData = apis.get.Post(post_id)
    return (
        <Suspense fallback={<Loading/>}>
            <Post postDataReader={postData.post.read}/>
        </Suspense>
    )
}

export default PostWrapper