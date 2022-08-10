import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Categorias from '../../../models/Categorias';
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams} from 'react-router-dom';
import './CadastroCategorias.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function CadastroCategorias() {
  let History = useNavigate();
  const { id } = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
    );

  const [categorias,setCategorias] = useState<Categorias>({
	id: 0,
	tipo:'',
    classe:''
})
useEffect(() =>{
	if(token === ""){
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
     function updatedCategorias(e: ChangeEvent<HTMLInputElement>){
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value,
        })
      }
      async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        console.log("categorias"+ JSON.stringify(categorias))
    
        if(id!==undefined) {
            console.log(categorias)
            put(`/categorias`,categorias,setCategorias,{
                headers:{
                'Authorization': token
                }
            })
            alert('Categorias atualizadas com sucesso');
        }else{
            post(`categorias`,categorias,setCategorias, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categorias cadastradas com sucesso');
        }
        back()
    }
    function back(){
        History('/categorias')
    }
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit ={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro de Categorias</Typography>
                <TextField value={categorias.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategorias(e)}id="tipo" label="tipo" variant="outlined" name="tipo" margin="normal" fullWidth />
                <TextField value={categorias.classe} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategorias(e)}id="classe" label="classe" variant="outlined" name="classe" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}
export default CadastroCategorias;