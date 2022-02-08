
import { Chip, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export interface TagItemProps {
  tag: string
}

const TagItem = (props: TagItemProps) => {
  return (
    <Chip clickable label={props.tag} 
      component='a' href={`tag/${props.tag}`}
      variant='outlined' size='small'
      />
  )
}

export default TagItem