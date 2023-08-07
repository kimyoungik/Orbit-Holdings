import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';


function AppNavBar() {

    const [activeMenu, setActiveMenu] = useState("");

    const isSelected = (menu) => activeMenu === menu;

    const selectedStyle = {
        borderBottom: "2px solid white",
    };

    const [anchorElNav, setAnchorElNav] = useState(false);


    const toggleDrawer = (isOpen) => () => {
        setAnchorElNav(isOpen);
        if (!isOpen) {
            setActiveMenu("");
        }
    };

    const navigate = useNavigate();

    const drawerContent = (
        <Box sx={{ width: 250, display: {md: 'flex', lg: 'none' } }} role="presentation" >
            <List>
                <ListItem >
                    <ListItemButton onClick={() => { setAnchorElNav(false); navigate('/orbit1') }}>
                        <ListItemText >회사소개</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton onClick={() => { setAnchorElNav(false); navigate('/orbit2') }}>
                        <ListItemText>차익거래</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton onClick={() => { setAnchorElNav(false); navigate('/orbit3') }}>
                        <ListItemText>김프봇</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton onClick={() => { setAnchorElNav(false); navigate('/orbit4') }}>
                        <ListItemText>이용방법</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton onClick={() => { setAnchorElNav(false); navigate('/orbit5') }}>
                        <ListItemText>봇설정</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton onClick={() => { setAnchorElNav(false); navigate('/orbit6') }}>
                        <ListItemText>문의</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );


    return (
        <AppBar sx={{ bgcolor: 'white' }}>
            <Container maxWidth="xl" sx={{ height: 90, display: 'flex', alignItems: 'center'  }}>
                <Toolbar sx={{width: '100%'  }}>
                    <Box sx={{ display: {xs: 'none', lg: 'flex'},flexGrow: 5, }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontWeight: 700,
                                fontSize: 40,
                                color: '#1478FF',
                                textDecoration: 'none',
                            }}
                        >
                            Orbit Holdings
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none'} }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            color="black"
                        >
                            <MenuIcon fontSize='large' />
                        </IconButton>
                        <Drawer anchor='left' open={anchorElNav} onClose={toggleDrawer(false)}>
                            {drawerContent}
                        </Drawer>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 1,
                            flexGrow: 1,
                            fontWeight: 700,
                            fontSize: 30,
                            color: '#1478FF',
                            textDecoration: 'none',
                            display: { xs: 'flex', lg: 'none'}
                        }}
                    >
                        Orbit Holdings
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            gap: 5,
                            display: {lg: 'flex', md: 'none', xs: 'none'},
                        }}>
                        <Button
                            sx={{
                                my: 2, color: 'black', display: 'block', mr: 1,
                                ...(isSelected("home") ? selectedStyle : {}),
                                fontSize: '18px', fontWeight: 700
                            }}
                            onClick={() => { navigate('/orbit1') }}

                        >회사소개</Button>
                        <Button
                            sx={{
                                my: 2, color: 'black', display: 'block', mr: 1,
                                ...(isSelected("stock") ? selectedStyle : {}),
                                fontSize: '18px', fontWeight: 700
                            }}
                            onClick={() => { navigate('/orbit2') }}
                        >차익거래</Button>
                        <Button
                            sx={{
                                my: 2, color: 'black', display: 'block', mr: 1,
                                ...(isSelected("news") ? selectedStyle : {}),
                                fontSize: '18px', fontWeight: 700
                            }}
                            onClick={() => { navigate('/orbit3') }}
                        >김프봇</Button>
                        <Button
                            sx={{
                                my: 2, color: 'black', display: 'block', mr: 1,
                                ...(isSelected("news") ? selectedStyle : {}),
                                fontSize: '18px', fontWeight: 700
                            }}
                            onClick={() => { navigate('/orbit4') }}
                        >이용방법</Button>
                        <Button
                            sx={{
                                my: 2, color: 'black', display: 'block', mr: 1,
                                ...(isSelected("news") ? selectedStyle : {}),
                                fontSize: '18px', fontWeight: 700
                            }}
                            onClick={() => { navigate('/orbit5') }}
                        >봇설정</Button>
                        <Button
                            sx={{
                                my: 2, color: 'black', display: 'block', mr: 1,
                                ...(isSelected("news") ? selectedStyle : {}),
                                fontSize: '18px', fontWeight: 700
                            }}
                            onClick={() => { navigate('/orbit6') }}
                        >문의</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppNavBar;
