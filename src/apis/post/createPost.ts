import { baseApi, BaseJson_Res } from "../BaseAPI";

export interface CreatePostParams {
  author: string
  password: string
  title: string
  content: string
  tags: string[]
  images: HTMLInputElement['files']
}

export const isCreatePostFormValid = (params: CreatePostParams) => {
  const { author, password, title, content, tags, images } = params
  if (title.length < 5) {
    alert('Title must be at least 5 characters long')
    return false;
  }
  if (content.length < 10) {
    alert('Content must be at least 10 characters long')
    return false;
  }
  // if (tags.length === 0) {
    //   alert('Tags must be at least 1 character long')
    //   return false;
    // }
    if (images && images.length > 3) {
      alert('Images must be less than 3')
      return false;
    }
    return true;
}

const createPost = (params: CreatePostParams) => {
  const { author, password, title, content, tags, images } = params

  const formData = new FormData()
  formData.append('author', author)
  formData.append('password', password)
  formData.append('title', title)
  formData.append('content', content)
  formData.append('tags', tags.toString())
  if (images)
    for (let i = 0; i < images.length; i++)
      formData.append(`images`, images.item(i) as any)
  return baseApi('/post/create', {
    method: 'POST',
    body: formData,
  })
}

export default createPost