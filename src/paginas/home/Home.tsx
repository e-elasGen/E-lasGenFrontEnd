import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {Box} from '@mui/material'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';


    function home() {
        let history = useNavigate();
        const token = useSelector<TokenState, TokenState["tokens"]>(
            (state) => state.tokens
        );
    
        useEffect(() => {
            if(token == ""){
                alert("Você precisa estar logado")
                history("/login")
            }
        }, [token])
        
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa estilo-grid' >
        <Grid alignItems="center" item xs={6}>
            <Box paddingX={20} >
                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Sejam bem vindes a E-lasGen!</Typography>
                <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="left" className='titulo'>Um ecommerce pensado para que mulheres empreendedoras tenham um espaço acolhedor e empoderador para divulgar seus produtos.</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
                <Box marginRight={1}>
                </Box>
                <Button variant="outlined" className='botao'>Ver e-commerce</Button>
            </Box>
        </Grid>
        <Grid item xs={6} >
            <img src="https://i.imgur.com/7eETai7.jpeg" alt="" className='img'/>
        </Grid>
        <Grid xs={12} className='postagens'>
        </Grid>
    </Grid>
</>
    );
}
export default home;