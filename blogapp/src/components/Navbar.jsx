import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>BLOG</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='info'>
                    <Link to='/'>
                        Home
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='inherit'>
                    <Link to='/add'>
                        ADD BLOG
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar