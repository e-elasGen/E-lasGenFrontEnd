import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
//import useLocalStorage from "react-use-localstorage";
import Produtos from "../../../models/Produtos";
import { buscaId, deleteId } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

function DeletarProduto() {

    const { id } = useParams<{id: string}>();
   // const [token, setToken] = useLocalStorage('token');
   let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
    const [produtos, setProdutos] = useState<Produtos>()
  
    useEffect(() => {
        if (token === "") {
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
            navigate("/login")
    
        }
    }, [token])
  
    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])
  
    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProdutos, {
            headers: {
              'Authorization': token
            }
          })
        }
  
        function sim() {
          navigate('/produtos')
            deleteId(`/produtos/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Produto deletado com sucesso',{
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });
          }
        
          function nao() {
            navigate('/produtos')
          }
     
    return (
      <>
        <Box m={2}>
          <Card variant="outlined" >
            <CardContent>
              <Box justifyContent="center">
                <Typography color="textSecondary" gutterBottom>
                  Deseja deletar a Produto:
                </Typography>
                <Typography color="textSecondary" >
                Categoria
                </Typography>
              </Box>
  
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
                </Box>
                <Box>
                <Button onClick={nao}  variant="contained" size='large' color="secondary">
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
  export default DeletarProduto;