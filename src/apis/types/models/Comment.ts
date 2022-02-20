export default interface Comment {
    _id: string
    children?: string

    author: string
    password: string
    images: string
    
    created_date: Date
    updated_date: Date

    content: string
}