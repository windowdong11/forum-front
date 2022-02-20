import Post from "../models/Post";
import { BaseJson_Res } from "./Base_Res";

const pickerThings = ['_id', 'author', 'title', 'content', 'comments', 'tags', 'created_date', 'updated_date'] as const
type UpdatePostResItem = Pick<Post, (typeof pickerThings)[number]> & {images: string[]}
export default interface Put_UpdatePost_Res extends BaseJson_Res {
  post: UpdatePostResItem
}