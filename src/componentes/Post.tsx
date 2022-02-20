import { Box, Button, ButtonProps, Paper, Divider, Typography, Stack, IconButton, styled, ImageList, ImageListItem } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { PostData } from "../apis/types/response/Get_Post";
import deletePost from "../apis/delete/deletePost";
import { useState } from "react";
import PasswordCheckModal from "./PasswordCheckModal";
import { useNavigate } from "react-router-dom";
import apis from "../apis/Apis";
import base_url from '../serverUrl.json'

const MarginBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1)
}))

const ContentBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(0.8),
  backgroundColor: theme.palette.grey['200'],
  width: '100%',
  borderRadius: theme.shape.borderRadius
}))


const MenuBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}))

const Post = (props: { postDataReader: () => PostData | null | undefined }) => {
  const postData = props.postDataReader()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigator = useNavigate()
  if (!postData) return <div>404 not found</div>

  const handleDelete = (password : string) => {
    apis.delete.DeletePost({postid: postData._id, password})
      .then(res => {
        if(res) {
          alert('Post removed! :)')
          navigator('/')
        }
        else {
          alert('Wrong password! :(')
        }
      })
      .catch(res => {
        console.log(res)
      })
  }

  return (
    <Paper variant="outlined">
      <MarginBox>
        <MenuBtn variant="outlined" size="small" disabled><EditIcon fontSize="small" />Edit</MenuBtn>
        <MenuBtn variant="outlined" size="small" onClick={handleOpen}><DeleteForeverIcon fontSize="small" />Remove</MenuBtn>
        <PasswordCheckModal isOpen={open} handleClose={handleClose} onSubmit={handleDelete}/>
        <Typography variant="caption">Developing Fetures : Edit, Remove, likes, comments</Typography>
      </MarginBox>
      <Divider />
      <MarginBox>
        <Typography variant="h5">{postData.title}</Typography>
        <Typography variant="caption">asked by {postData.author}</Typography>
      </MarginBox>
      <Divider />
      <Stack direction="row">
        <Stack direction="column" alignItems="center">
          <MarginBox>
            <IconButton>
              <FavoriteBorderIcon sx={{ color: 'lightpink' }} />
              <FavoriteIcon sx={{ color: 'lightpink' }} />
            </IconButton>
          </MarginBox>
          <Typography variant="caption">0 likes</Typography>
        </Stack>
        <Divider flexItem orientation="vertical" />
        <ContentBox>
          {
            postData.images.map((url, idx) => (
              <div key={url}>
                <img src={(new URL(url, base_url)).href} alt={`${idx}`} loading="lazy" style={{'maxHeight': '400px', maxWidth: '100%'}}/>
              </div>
            ))
          }
          <Typography variant="body1">{postData.content.split('\r\n').map(txt =><span>{txt}<br/></span>)}</Typography>
        </ContentBox>
      </Stack>
    </Paper>
  )
}

export default Post;