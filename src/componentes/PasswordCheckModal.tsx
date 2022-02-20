import { Modal, Box, Typography, TextField, Button, styled } from "@mui/material"
import { borderRadius } from "@mui/system";
import { useState } from 'react';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const PasswordCheckModal = (props: {
  isOpen: boolean
  handleClose:() => void,
  onSubmit: (password: string) => void
}) => {
  const [password, setPassword] = useState('')
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">Confirm Password</Typography>
        <Box marginTop='8px' marginBottom='18px'>
          <TextField id="filled-basic" label="password" variant="filled" value={password} onChange={e => setPassword(e.target.value)} />
        </Box>
        <Button variant='contained' onClick={()=> props.onSubmit(password)}>Confirm password</Button>
      </Box>
    </Modal>
  )
}

export default PasswordCheckModal