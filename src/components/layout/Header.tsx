'use client';

import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Container,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useScrollTrigger,
    Typography,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/lib/constants';

interface ElevationScrollProps {
    children: React.ReactElement;
}

function ElevationScroll(props: ElevationScrollProps) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return children;
}

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [currentMenu, setCurrentMenu] = useState<string | null>(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>, label: string) => {
        setAnchorEl(event.currentTarget);
        setCurrentMenu(label);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentMenu(null);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: 700, color: 'primary.main' }}>
                タケヤ電機
            </Typography>
            <List>
                {NAVIGATION_ITEMS.map((item) => (
                    <Box key={item.label}>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                href={item.path}
                                sx={{ textAlign: 'center' }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                        {item.children && item.children.map((child) => (
                            <ListItem key={child.label} disablePadding sx={{ pl: 2 }}>
                                <ListItemButton
                                    component={Link}
                                    href={child.path}
                                    sx={{ textAlign: 'center' }}
                                >
                                    <ListItemText primary={child.label} secondary />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Box>
                ))}
            </List>
            <Box sx={{ p: 2 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PhoneIcon />}
                    fullWidth
                    component={Link}
                    href="/contact"
                >
                    お問い合わせ
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <ElevationScroll>
                <AppBar position="sticky" sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters>
                            {/* ロゴ */}
                            <Box
                                component={Link}
                                href="/"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    textDecoration: 'none',
                                    flexGrow: { xs: 1, md: 0 },
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontWeight: 800,
                                        color: 'primary.main',
                                        mr: 4,
                                    }}
                                >
                                    タケヤ電機
                                </Typography>
                            </Box>

                            {/* デスクトップメニュー */}
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                                {NAVIGATION_ITEMS.map((item) => (
                                    <Box key={item.label}>
                                        {item.children ? (
                                            <>
                                                <Button
                                                    onClick={(e) => handleMenuClick(e, item.label)}
                                                    endIcon={<ArrowDropDownIcon />}
                                                    sx={{ color: 'text.primary' }}
                                                >
                                                    {item.label}
                                                </Button>
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    open={currentMenu === item.label}
                                                    onClose={handleMenuClose}
                                                    MenuListProps={{
                                                        'aria-labelledby': 'basic-button',
                                                    }}
                                                >
                                                    {item.children.map((child) => (
                                                        <MenuItem
                                                            key={child.label}
                                                            component={Link}
                                                            href={child.path}
                                                            onClick={handleMenuClose}
                                                        >
                                                            {child.label}
                                                        </MenuItem>
                                                    ))}
                                                </Menu>
                                            </>
                                        ) : (
                                            <Button
                                                component={Link}
                                                href={item.path}
                                                sx={{ color: 'text.primary' }}
                                            >
                                                {item.label}
                                            </Button>
                                        )}
                                    </Box>
                                ))}
                            </Box>

                            {/* お問い合わせボタン（デスクトップ） */}
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<PhoneIcon />}
                                component={Link}
                                href="/contact"
                                sx={{ display: { xs: 'none', md: 'flex' } }}
                            >
                                お問い合わせ
                            </Button>

                            {/* モバイルメニューボタン */}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>

            {/* モバイルドロワー */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}

