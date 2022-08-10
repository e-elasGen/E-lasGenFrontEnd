import Categorias from './Categorias'

interface Produtos {

    id: number,
    nome: string,
    descricao: string,
    quantidade: number,
    preco: number,
    imagem: string,
    categorias?: Categorias |null,

}

export default Produtos;