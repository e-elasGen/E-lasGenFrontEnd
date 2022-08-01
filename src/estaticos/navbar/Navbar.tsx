import React from 'react';
import './Navbar.css'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from '@mui/material';




function Navbar(){
    return (

        
         <>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <Box className='cursor' style={{ marginRight: "65%" }}>
                        <Typography variant='h5' color='inherit'>
                            E-lasGen
                        </Typography>
                    </Box>
                    <Box display='flex' justifyContent='start'>
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='inherit'>
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='inherit'>
                                Produtos
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='inherit'>
                                Sobre
                            </Typography>
                        </Box>
                        
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='inherit'>
                                logout
                            </Typography>
                        </Box>
                        
                       
                    </Box>

                </Toolbar>
            </AppBar>
        </>


    );
}

export default Navbar;