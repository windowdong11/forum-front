export default interface Post {
    _id: string
    comments: string

    created_date: Date
    updated_date: Date

    author: string
    password: string
    title: string
    content: string
    images: string[]
    tags: string[]
}

export type Post_Raw = {[key in keyof Post] : Post[key] extends string | string[] ? Post[key] : string}

export const Post_DateTypes_Tuple = ['created_date', 'updated_date'] as const
export type Post_DateTypes = {[key in (typeof Post_DateTypes_Tuple)[number]] : Date}

// export type Post_DateTypes = Pick<Post, {[key in keyof Post] : Post[key] extends Date ? key : never}[keyof Post]>