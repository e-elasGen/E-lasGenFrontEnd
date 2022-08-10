import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
//import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produtos from '../../../models/Produtos';

function ListaProduto() {

/* Um React Hook que permite que você tenha um estado em um componente funcional. */
  const [Produtos, setProdutos] = useState<Produtos[]>([])
  //const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  /* Verificando se o token está vazio e se estiver, alertará o usuário que ele precisa estar logado
  e, em seguida, navegue até a página de login. */
  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  
/**
   * GetPost() é uma função assíncrona que chama busca() com os parâmetros "/postagens", setPosts e
   * um objeto com uma propriedade de cabeçalho que possui uma chave de 'Autorização' e um valor de token.
   */
  async function getProdutos() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

/* Chamando a função `getPost()` toda vez que o `posts.length` muda. */
  useEffect(() => {
    getProdutos()
  }, [Produtos.length])

  return (
    <>
      {
        Produtos.map(produtos => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produto
                </Typography>
                <Typography variant="h5" component="h2">
                  {produtos.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {produtos.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {produtos.categorias?.classe}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${produtos.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaProduto;