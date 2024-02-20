// "use client";

// import MenuIcon from '@mui/icons-material/Menu';
// import { Grow, Typography, AppBar, Toolbar, Button, useTheme, useMediaQuery, Menu, MenuItem, IconButton } from '@mui/material';
// import React from 'react';


// const NavBar = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<EventTarget | null>(null);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleMobileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const mobileMenuId = 'primary-search-account-menu-mobile';

//     const NavMenuItem: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
//         const [clicked, setClicked] = React.useState(false);

//         const handleClick = () => {
//             setClicked(true);
//             setTimeout(() => setClicked(false), 200); // Reset after 200ms
//         };

//         return (
//             <Grow in={!clicked}>
//                 <MenuItem onClick={handleClick} {...props}>
//                     {children}
//                 </MenuItem>
//             </Grow>
//         );
//     };

//     const renderMobileMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl as Element}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >
//             <NavMenuItem onClick={handleMobileMenuClose}>About</NavMenuItem>
//             <NavMenuItem onClick={handleMobileMenuClose}>Services</NavMenuItem>
//             <NavMenuItem onClick={handleMobileMenuClose}>Portfolio</NavMenuItem>
//             <NavMenuItem onClick={handleMobileMenuClose}>Contact</NavMenuItem>
//         </Menu>
//     );

//     return (
//         <AppBar position="static" elevation={0} sx={{ backgroundColor: '#FFFFFF', color: '#22342E' }}>
//             <Toolbar>
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#22342E' }}>
//                     Goodly Development
//                 </Typography>
//                 {isMobile ? (
//                     <>
//                         <IconButton
//                             size="large"
//                             edge="start"
//                             color="inherit"
//                             aria-label="menu"

//                             onClick={handleMobileMenuOpen}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         {renderMobileMenu}
//                     </>
//                 ) : (
//                     <>
//                         <Button color="inherit" sx={{ color: '#22342E', '&:hover': { backgroundColor: '#F4C85F', color: '#22342E' } }}>About</Button>
//                         <Button color="inherit" sx={{ color: '#22342E', '&:hover': { backgroundColor: '#F4C85F', color: '#22342E' } }}>Services</Button>
//                         <Button color="inherit" sx={{ color: '#22342E', '&:hover': { backgroundColor: '#F4C85F', color: '#22342E' } }}>Portfolio</Button>
//                         <Button color="inherit" sx={{ color: '#22342E', '&:hover': { backgroundColor: '#F4C85F', color: '#22342E' } }}>Contact</Button>
//                     </>
//                 )}
//             </Toolbar>
//         </AppBar>
//     );
// };