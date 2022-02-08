export default interface D_Post {
  _id: string

  created_date: Date
  updated_date: Date

  author: string
  password: string
  title: string
  content: string
  tags: string[]
}

export const post_dateTypes = ['created_date', 'updated_date'] as const
export type Post_DateTypes = (typeof post_dateTypes)[number]
export const isPost_DateTypes = (x: any): x is Post_DateTypes => post_dateTypes.includes(x)

export type R_Post = Omit<D_Post, Post_DateTypes> & Record<Post_DateTypes, string>