"use client";
import React, { useState, useEffect } from 'react';
import { Container, Grow, Typography, AppBar, Toolbar, Button, Box, useTheme, useMediaQuery, Menu, MenuItem, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { CardBody, CardContainer, CardItem } from "@/components/3dCard";
import Image from 'next/image';
import { Roboto, Poppins } from 'next/font/google';

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

const theme = createTheme({
  palette: {
    primary: {
      main: '#22342E',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F4C85F',
      contrastText: '#22342E',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    error: {
      main: '#f44336',
    },
    text: {
      primary: '#22342E',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: `"Inter", ${roboto.style.fontFamily}, ${poppins.style.fontFamily}, sans-serif`,
    h1: { fontFamily: `${poppins.style.fontFamily}, sans-serif`, fontWeight: 600 },
    h2: { fontFamily: `${poppins.style.fontFamily}, sans-serif`, fontWeight: 600 },
    h3: { fontFamily: `${poppins.style.fontFamily}, sans-serif`, fontWeight: 600 },
    h4: { fontFamily: `${poppins.style.fontFamily}, sans-serif`, fontWeight: 100 },
    h5: { fontFamily: `${poppins.style.fontFamily}, sans-serif`, fontWeight: 600 },
    h6: { fontFamily: `${poppins.style.fontFamily}, sans-serif`, fontWeight: 300 },
    // You can also adjust other typography elements as needed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#22342E', // Default text color
          position: 'relative',
          '&:hover': {
            backgroundColor: 'transparent', // Removes the default hover background color
            '&:after': {
              width: '100%', // Full width on hover
            },
          },
          '&:after': { // Creates the underline effect
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '0', // Starts with no width
            height: '2px',
            backgroundColor: '#F4C85F', // Underline color
            transition: 'width .3s ease', // Animation timing
          },
        },
      },
    },
  },
});

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<EventTarget | null>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const NavMenuItem: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
    const [clicked, setClicked] = React.useState(false);

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200); // Reset after 200ms
    };

    return (
      <Grow in={!clicked}>
        <MenuItem onClick={handleClick} {...props}>
          {children}
        </MenuItem>
      </Grow>
    );
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl as Element}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavMenuItem onClick={handleMobileMenuClose}>About</NavMenuItem>
      <NavMenuItem onClick={handleMobileMenuClose}>Services</NavMenuItem>
      <NavMenuItem onClick={handleMobileMenuClose}>Portfolio</NavMenuItem>
      <NavMenuItem onClick={handleMobileMenuClose}>Contact</NavMenuItem>
    </Menu>
  );

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: '#FFFFFF', color: '#22342E' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#22342E' }}>
          Goodly Development
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"

              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            {renderMobileMenu}
          </>
        ) : (
          <>
            <Button color="inherit" sx={{ color: '#22342E', '&:hover': { backgroundColor: '#F4C85F', color: '#22342E' } }}>About</Button>
            <Button color="inherit" sx={{ color: '#22342E', '&:hover': { backgroundColor: '#F4C85F', color: '#22342E' } }}>Services</Button>
            <Button color="inherit" sx={{ color: '#22342E', '&:hover': { backgroundColor: '#F4C85F', color: '#22342E' } }}>Portfolio</Button>
            <Button color="inherit" sx={{ color: '#22342E', '&:hover': { backgroundColor: '#F4C85F', color: '#22342E' } }}>Contact</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      height: '50vh', // Adjusts the height of the hero section
      my: 0,
      py: 0,
      backgroundColor: '#22342E', // Deep Green as background for contrast
      color: 'white', // Ensures text stands out
      textAlign: 'center',
      overflow: 'hidden', // Keeps any animated elements from exceeding the box boundaries
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{
            color: '#F4C85F', // Vibrant Yellow
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            marginBottom: 3,
          }}
        >
          Welcome to
        </Typography>
        <Image
          src="/GoodlyW.svg"
          alt="Logo"
          width={isMobile ? 250 : 500}
          height={isMobile ? 250 : 500}
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.2s', // Slight delay to draw attention
          }}
        />
        <Typography
          variant="h4"
          sx={{
            color: '#F4C85F', // Vibrant Yellow for tagline
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.4s', // Delays the animation of the tagline to follow "Goodly"
            marginTop: 3, // Adds space between the logo and tagline
          }}
        >
          We create software solutions
        </Typography>
      </Container>
    </Box>
  );
};

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <Box sx={{ py: 8, backgroundColor: '#F5F5F5', color: '#22342E' }}>
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#22342E', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography align="center" paragraph sx={{ color: '#757575' }}> {/* Adjusted for softer contrast */}
        {content}
      </Typography>
    </Container>
  </Box>
);

const Portfolio = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      height: '100vh', // take full viewport height
      padding: '20px', // add some padding
    }}
    >
      {[1, 2, 3].map((item, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={`https://source.unsplash.com/random?sig=${item}`}
                height="600"
                width="600"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};


const Footer = () => (
  <Box sx={{
    bgcolor: '#22342E', // Deep Green background for a solid footer
    p: 6,
    color: 'white', // White text for contrast
  }} component="footer">
    <Typography variant="h6" align="center" gutterBottom sx={{ color: '#F4C85F' }}>
      GD
    </Typography>
    <Typography variant="subtitle1" align="center" component="p" sx={{ color: 'white' }}>
      Build me something good
    </Typography>
  </Box>
);

const LandingPage = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <Section title="About Us" content="Information about your company." />
      <Section title="Our Services" content="Details on services offered." />
      <Portfolio />
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

export default LandingPage;
