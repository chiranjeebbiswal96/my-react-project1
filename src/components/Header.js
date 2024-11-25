import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import logo from '../assets/images/Practical Task/logo.png';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: 'rgba(4, 56, 115, 1)',
        boxShadow: 'none',
        padding: '0 2rem',
      }}
    >
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          style={{
            fontWeight: 'bold',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: '0.5rem', height: '40px' }}
          />
          Whitepace
        </Typography>

        {/* Desktop Navigation and Buttons */}
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' }, // Hidden on small screens
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <Link href="#" underline="none" style={{ color: '#fff', fontSize: '1rem' }}>
            Products
          </Link>
          <Link href="#" underline="none" style={{ color: '#fff', fontSize: '1rem' }}>
            Solutions
          </Link>
          <Link href="#" underline="none" style={{ color: '#fff', fontSize: '1rem' }}>
            Resources
          </Link>
          <Link href="#" underline="none" style={{ color: '#fff', fontSize: '1rem' }}>
            Pricing
          </Link>
          <Button
            variant="outlined"
            style={{
              color: '#fff',
              borderColor: '#fff',
              textTransform: 'none',
              padding: '0.5rem 1.5rem',
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              textTransform: 'none',
              padding: '0.5rem 1.5rem',
            }}
          >
            Try Whitepace free
          </Button>
        </Box>

        {/* Hamburger Menu Icon (Visible on small screens) */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', lg: 'none' } }} // Show on small screens
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: 'rgba(4, 56, 115, 1)', color: '#fff' },
        }}
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Solutions" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Resources" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pricing" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Try Whitepace free" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
