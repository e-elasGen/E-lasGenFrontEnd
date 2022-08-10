import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import './DeletarCategorias.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Categorias from '../../../models/Categorias';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function DeletarCategorias() {
  let History = useNavigate();
  const { id } = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
    );

  const [categorias,setCategorias] = useState<Categorias>()
useEffect(() =>{
	if(token==""){
	alert("Você precisa estar logado")
	History("/login")
	}
},[token])
useEffect(()=>{
	if(id !== undefined){
	findById(id)
	}	
}, [id])
async function findById(id: string){
	buscaId(`/categorias/${id}`,setCategorias, {
		headers: {
			'Authorization': token
		}
	})
     }
  
     function sim(){
      History('/listacategorias')
      deleteId(`/categorias/${id}`,{
      headers:{
        'Authorization':token
      }
    });
      alert('Categoria deletada com sucesso');
      }
      function nao(){
      History('/listacategorias')
      }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a categoria:
              </Typography>
              <Typography color="textSecondary">
                {categorias?.tipo}
              </Typography>
              <Typography color="textSecondary">
                {categorias?.classe}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim}variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao}variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarCategorias;