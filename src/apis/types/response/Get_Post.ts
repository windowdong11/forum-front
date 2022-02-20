import Post, { Post_DateTypes, Post_DateTypes_Tuple, Post_Raw } from "../models/Post";
import { BaseJson_Res } from "./Base_Res";

const pickerThings = ['_id', 'author', 'title', 'content', 'comments', 'tags','created_date', 'updated_date', 'images'] as const


type PostResPicker = (typeof pickerThings)[number]
export type PostData = Pick<Post, PostResPicker>
type PostData_Raw = Pick<Post_Raw, PostResPicker> 

export default interface Get_Post_Res extends BaseJson_Res {
  post: PostData_Raw
}

export function PostRes_Raw_to_Data(rawPost: PostData_Raw) : PostData {
  return {
    ...rawPost,
    ...Post_DateTypes_Tuple.reduce((prev, key) => ({...prev, [key] : new Date(rawPost[key])}), {}) as Post_DateTypes
  }
}