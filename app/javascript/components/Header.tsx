import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => (
  // ≡:in前 ログイン・みんなの単語帳→ in後 アイコン、名前、マイ単語帳、みんなの単語帳、ログアウト
  <header>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/'>Tangocho</Link>
          </Typography>
          <Button color='inherit' component={Link} to='/sign_in'>サインイン</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </header>
);

export default Header;
