import React, { EventHandler, useRef, useState } from "react"
import { Box, Button, TextField, Chip } from '@mui/material';
import UploadBtn, { getFileNames } from "../componentes/Buttons/UploadBtn";
import apis from '../apis/Apis';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';

type FormChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
const imageUploader = {
    name: 'images',
    accept: 'image/*',
    multiple: true,
    maxFileCount: 3
} as const
function isImageUploader(e: FormChangeEvent): e is React.ChangeEvent<HTMLInputElement> {
    return e.target.name === imageUploader.name
}

const CreatePost = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        password: '',
        tags: '',
        images: {} as HTMLInputElement['files']
    })
    const handleFormChange = (e: FormChangeEvent) => {
        if (isImageUploader(e)) {
            setFormData({
                ...formData,
                images: e.target.files
            })
        }
        else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }
    }
    const nav = function(){navigate('/')}
    const handlePostForm = async (e : React.FormEvent<HTMLFormElement>) => {
        // apis.post.CreatePost({...formData, tags: []}, ()=> {navigate('/')})
        e.preventDefault()
        const { author, password, title, content, tags, images } = formData

        const formd = new FormData()
        formd.append('author', author)
        formd.append('password', password)
        formd.append('title', title)
        formd.append('content', content)
        formd.append('tags', tags.toString())
        if (images)
            for (let i = 0; i < images.length; i++)
            formd.append(`images`, images as any)
        fetch('http://localhost:5500/', {
            method: 'POST',
            body: formd,
        }).then(() => {
            nav()
        })
    }

    return (
        <Paper variant="outlined" component="form" onSubmit={handlePostForm} sx={{padding: '8px', maxWidth: '400px'}}>
            <Box>
                <TextField label="author" name="author"
                    size="small" margin="dense"
                    sx={{marginRight: '8px'}}
                    onChange={handleFormChange} />
                <TextField label="password" name="password" type="password"
                    size="small" margin="dense"
                    onChange={handleFormChange} />
            </Box>
            <Box>
                <TextField label="title" name="title"
                    size="small" margin="normal"
                    onChange={handleFormChange} />
            </Box>
            <Box>
                <TextField multiline minRows={4} maxRows={12}
                    label="content" name="content"
                    margin="normal"
                    fullWidth
                    onChange={handleFormChange} />
            </Box>
            <Box>
                <TextField label="tags" name="tags"
                        size="small" margin="dense"
                        onChange={handleFormChange} />
            </Box>
            <Box>
                <UploadBtn {...imageUploader}
                    variant="outlined"
                    onChange={handleFormChange}>
                    Upload Images
                </UploadBtn>
                {
                    formData.images && getFileNames(formData.images).map(name => 
                        <Chip label={name} size="small" />
                    )
                }
            </Box>
            <Button variant="contained" type="submit">Post a question</Button>
        </Paper>
    )
}

export default CreatePost