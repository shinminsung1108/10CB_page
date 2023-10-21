import * as React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { setUser } from "../pages/Login/Store"
import { Navigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import {
    Divider, Drawer, List, ListItem, ListItemButton,
    ListItemText
} from "@mui/material";
import Link from '@mui/material/Link';

export function Navbar(props) {
    // @ts-ignore
    const { userStore: user } = useSelector((state) => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            dispatch(setUser({
                username: "",
                password: "",
                tier: "",
                race: "",
                race2: "",
                race3: "",
            }));
            navigate("/");
        } catch (err) {
            console.log(err)
            alert("로그아웃을 실패해 ?")
        }

    };

    const drawerWidth = 240;
    const { window } = props;

    const navItems = ['리그일정', '카카오톡', '공지사항'];
    const settings = ['내 프로필', '프로필 수정', '로그아웃'];

    const [anchorElUser, setAnchorElUser] = useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (setting) => {
        if (setting === settings[0]) {
            navigate("/My");
        }
        else if (setting === settings[2]) {
            handleSubmit();
        }
        setAnchorElUser(null);
    };

    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                10CB
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    if (user.username === '' || user.password === '') {
        return <Navigate to="/Login" />;
    }

    return (
        <Box sx={{ display: 'flex'}}>
            <AppBar component="nav" style={{ backgroundColor: "#DBA901", position: "relative" }}>
                <Toolbar style={{ justifyContent: "space-between" }} >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        onClick={() => navigate("/home")}
                        style={{ cursor: "pointer"}}
                    >
                        10CB
                    </Typography>
                    <Typography variant="body2" sx={{ mr: 5 }}>
                        환영합니다 {user.username}({user.race})님
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 5 }}>
                        <Button key="1" sx={{ color: '#fff' }}>리그일정</Button>
                        <Button key="2" sx={{ color: '#fff' }} href='https://open.kakao.com/o/gR30yMmf'>카카오톡</Button>
                        <Button key="3" sx={{ color: '#fff' }}>공지사항</Button>
                    </Box>

                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}