import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import { Link } from "react-router-dom";
import D_Post from "../apis/Type_Post";
import TagList from "./TagList";


type PostItemProps = Pick<D_Post, '_id'|'title'|'author'|'updated_date'|'tags'>


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