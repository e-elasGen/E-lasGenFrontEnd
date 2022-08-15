import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {Box} from '@mui/material'
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import ModalProduto from './../../components/produtos/modalProduto/ModalProduto';
import TabProduto from '../../components/produtos/tabProduto/TabProduto';
import { toast } from 'react-toastify';
import CarouselProduto from './../../components/carousel/carouselProduto/CarouselProduto';
import CarouselDestaqueProdutos from './../../components/carousel/carouselDestaqueProdutos/CarouselDestaqueProdutos';
import CarouselPropaganda from '../../components/carousel/carouselPropaganda/CarouselPropaganda';
import FaleConosco from './../../components/contato/faleConosco/FaleConosco';



    function Home() {
        let history = useNavigate();
        const token = useSelector<TokenState, TokenState["tokens"]>(
            (state) => state.tokens
        );
    
        useEffect(() => {
            if(token === ""){
                toast.error('Você precisa estar logado',{
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                history("/login")
            }
        }, [token])
        
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa estilo-grid' >

            <Grid>
                <CarouselDestaqueProdutos/>
            </Grid>  


            <Grid>
            <Box paddingX={1} >
                <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="left" className='titulo'>Ofertas do dia
                </Typography>
            </Box>
                <CarouselProduto/>
            </Grid>

            <Grid>
                <CarouselPropaganda/>
            </Grid>

            <Grid>
            <Box paddingX={1} >
                <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="left" className='titulo'>Baseado no seu carrinho de compras
                </Typography>
            </Box>
                <CarouselProduto/>
            </Grid>

            <Grid>
                <FaleConosco/>
            </Grid>



        <Grid alignItems="center" item xs={6}>
            <Box paddingX={20} >
                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Sejam bem vindes a E-lasGen!</Typography>
                <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="left" className='titulo'>Um ecommerce pensado para que mulheres empreendedoras tenham um espaço acolhedor e empoderador para divulgar seus produtos.</Typography>
                
            </Box>
            <Box display="flex" justifyContent="center">
                <Box marginRight={1}>
                    <ModalProduto />
                </Box>
                <Link to="/produtos" className="text-decorator-none">
                <Button variant="outlined" className='botao'>Ver e-commerce</Button>
                </Link>
            </Box>
        </Grid>
        
        <Grid xs={12} className='produtos'>
            <TabProduto />
        </Grid>
    </Grid>
</>
    );
}
export default Home;