import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
//import useLocalStorage from "react-use-localstorage";
import { TokenState } from '../../../store/tokens/tokensReducer';
import {
    Container,
    Typography,
    TextField,
    Button,
    Select,
    InputLabel,
    MenuItem,
    FormControl,
    FormHelperText,
} from '@material-ui/core';
import Categorias from './../../../models/Categorias';
import Produtos from './../../../models/Produtos';
import { busca, buscaId, put, post } from '../../../services/Service';
import { toast } from 'react-toastify';

function CadastroProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categorias[]>([]);
    // const [token, setToken] = useLocalStorage('token');
    /* Um hook que é usado para obter o estado do token. */
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
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
            navigate('/login');
        }
    }, [token]);

    const [categoria, setCategoria] = useState<Categorias>({
        id: 0,
        tipo: '',
        classe: '',
    });
    const [produto, setProduto] = useState<Produtos>({
        id: 0,
        nome: '',
        descricao: '',
        quantidade: 0,
        preco: 0,
        imagem: '',
        categorias: null,
    });

    useEffect(() => {
        setProduto({
            ...produto,
            categorias: categoria,
        });
    }, [categoria]);

    useEffect(() => {
        getCategorias();
        if (id !== undefined) {
            findByIdProdutos(id);
        }
    }, [id]);

    async function getCategorias() {
        await busca('/categorias', setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function findByIdProdutos(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        });
    }

    function updatedProdutos(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categorias: categoria,
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(produto)

        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    Authorization: token,
                },
            });
            toast.success('Produto atualizado com sucesso',{
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    Authorization: token,
                },
            });
            toast.success('Produto cadastrado com sucesso',{
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
        back();
    }

    function back() {
        navigate('/produtos');
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="h1"
                    align="center"
                >
                    Formulário de cadastro de produtos
                </Typography>
                <TextField
                    value={produto.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updatedProdutos(e)
                    }
                    id="nome"
                    label="nome"
                    variant="outlined"
                    name="nome"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    value={produto.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updatedProdutos(e)
                    }
                    id="descricao"
                    label="descricao"
                    name="descricao"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    value={produto.quantidade}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updatedProdutos(e)
                    }
                    id="quantidade"
                    label="quantidade"
                    name="quantidade"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    value={produto.preco}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updatedProdutos(e)
                    }
                    id="preco"
                    label="preco"
                    name="preco"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    value={produto.imagem}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updatedProdutos(e)
                    }
                    id="imagem"
                    label="imagem"
                    name="imagem"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">
                        Categoria
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) =>
                            buscaId(
                                `/categorias/${e.target.value}`,
                                setCategoria,
                                {
                                    headers: {
                                        Authorization: token,
                                    },
                                }
                            )
                        }
                    >
                        {categorias.map((categoria) => (
                            <MenuItem value={categoria.id}>
                                {categoria.classe}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>
                        Escolha uma categoria para o produto
                    </FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    );
}
export default CadastroProduto;
