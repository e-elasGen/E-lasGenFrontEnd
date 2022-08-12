import React, {ChangeEvent, useState, useEffect} from 'react';
import {Button, Grid, TextField, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import {login} from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ''){
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    async function onSubmit(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(`/usuarios/logar`, userLogin, setToken)          
            toast.success('Usuário logado com sucesso!',{
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }catch(error){
            toast.error('Dados do usuário inconsistentes. Erro ao logar!',{
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

        
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='container-box-login'>
            <Grid alignItems='center' xs={6} >
                <Box padding={20}  className='container-login'>
                    <Box >
                        <img className='imagem' src="https://i.imgur.com/SoWe6xn.png" alt="" />
                    </Box>
                    <form onSubmit={onSubmit}>
                        
                         <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='usario' label='Digite seu e-mail' variant='outlined' name='usuario' margin='normal' fullWidth />
                         <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Digite sua senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                         <Box marginTop={2} textAlign='center'>
                           
                                <Button type='submit'className="custom-btn btn" >
                                    Logar
                                </Button>
                              
                         </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                            <Link to='/cadastrousuario' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='texto-destaque'>Cadastre-se</Typography>
                            </Link>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    )
}

export default Login;