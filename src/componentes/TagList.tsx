import { Stack } from "@mui/material"
import Box from "@mui/material/Box"
import Post from "../apis/types/models/Post"
import TagItem from "./TagItem"

interface TagListProps {
  tags: Post['tags']
}

const TagList = (props: TagListProps) => {
  return (
    <Stack direction="row" spacing={2} sx={{margin: '8px'}}>
      {props.tags.map((tag, idx) => <TagItem tag={tag} key={idx}/>)}
    </Stack>
  )
}
export default TagList