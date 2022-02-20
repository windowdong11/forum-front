import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import { Link } from "react-router-dom";
import Post from "../apis/types/models/Post";
import TagList from "./TagList";


type PostItemProps = Pick<Post, '_id'|'title'|'author'|'updated_date'|'tags'>


const PostItem = (props: PostItemProps) => {
  const { _id, title, author, updated_date, tags } = props;
  return (
    <Paper>
      <Link to={`post/${_id}`}>{title}</Link>
      <TagList tags={tags}/>
    </Paper>
  )
}

export default PostItem