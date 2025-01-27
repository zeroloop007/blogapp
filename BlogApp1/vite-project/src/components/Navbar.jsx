import React from 'react';
import { blue, deepPurple } from '@mui/material/colors';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const primary = blue[500];
  const buttonColor = blue[200]; 

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: primary }} 
      >
        <Toolbar>
        <span>
            Blogapp   
        </span>
         <div className="Navbar">
         <Link to='/'>
          <Button
            sx={{
              color: 'white', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: blue[300],
              },
            }}
          >
            HomePage
          </Button>
          </Link>  
          <Link to='/add'>
          <Button
            sx={{
              color: 'white', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: deepPurple[300],
              },
            }}
          >
            Blog addform
          </Button>
          </Link>
         </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;