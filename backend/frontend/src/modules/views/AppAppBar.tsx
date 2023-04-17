import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link to = "/" style={{color:"inherit", fontSize:20,textDecoration:"none"}}>
            {/* variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 20}} */}
            {'High Desert Soaps'}
            
          </Link>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Link to = "/shopping-cart/" style={{color:"inherit", fontSize:30,textDecoration:"none"}}>
              <ShoppingCartIcon/>
            </Link>
            <Link to = "/sign-in/" style={{color:"inherit", fontSize:30,textDecoration:"none"}}>
              <AccountCircleIcon/>
            </Link>
            {/* <Link
              variant="h6"
              underline="none"
              href="/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link> */}
          </Box>
          
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
