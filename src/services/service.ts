/* Importando a biblioteca axios. */
import axios from 'axios';


/* Criando uma nova instância de axios com um baseURL. */
export const api = axios.create({
    baseURL: 'https://elasgen.herokuapp.com/'
})


/* Uma função que está sendo exportada. */
export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
/* Enviando uma requisição para o servidor. */
    const resposta = await api.post(url, dados)
/* Configurando o estado do componente. */
    setDado(resposta.data)
}

/* Uma função que está sendo exportada. */
export const login = async (url: any, dados: any, setDado: any) => {
/* Enviando uma requisição para o servidor. */
    const resposta = await api.post(url, dados)
/* Configurando o estado do componente. */
setDado(resposta.data.token)
}