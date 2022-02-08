import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import SvgIcon from '@mui/icons-material/Menu';
import LogoIcon from '../images/TeethIcon';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { border } from '@mui/system';

const StyledLogoIcon = styled(LogoIcon)(({theme}) => ({
    fontSize: '48px',
}))

const StyledLink = styled(Link)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#a6d8be',
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down('sm')] :{
        padding: 0
    }
}))

export default function Header() {

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" color='transparent'>
                <Toolbar>
                    <StyledLink to="/" style={{ margin: '8px' }}>
                        <StyledLogoIcon />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                            fontWeight='bold'
                        >
                            Clinic
                        </Typography>
                    </StyledLink>
                    <Box sx={{flexGrow: 1}}/>
                    <Link to='/createpost'>
                        <Button variant='contained'>Ask a question</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}