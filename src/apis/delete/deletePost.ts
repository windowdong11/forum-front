
import { baseApi } from '../BaseAPI';

export interface DeletePostProps {
  postid: string
  password: string
}

export default async function deletePost(props: {postid: string, password: string}) {
  return baseApi(`/post/delete/${props.postid}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
    body: JSON.stringify({
      password: props.password
    })
  })
}