import { Box, Button, ButtonProps, Paper, Divider, Typography, Stack, IconButton, styled } from "@mui/material"
import D_Post from "../apis/Type_Post"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

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

const Post = (props: { postDataReader: () => D_Post | null | undefined }) => {
  const postData = props.postDataReader()
  if (!postData) return <div>404 not found</div>
  return (
    <Paper variant="outlined">
      <MarginBox>
        <MenuBtn variant="outlined" size="small" disabled><EditIcon fontSize="small" />Edit</MenuBtn>
        <MenuBtn variant="outlined" size="small" disabled><DeleteForeverIcon fontSize="small" />Remove</MenuBtn>
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
          <Typography variant="body1">{postData.content}</Typography>
        </ContentBox>
      </Stack>
    </Paper>
  )
}

export default Post;