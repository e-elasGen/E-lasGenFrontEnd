import React from "react";
import './Sobre.css';
import { Box } from '@mui/material';
import CardPerfilDarioReis from "../../components/card/card/cardPerfil/CardPerfilDarioReis";
import CardPerfilLeoRampazi from "../../components/card/card/cardPerfil/CardPerfilLeoRampazi";
import CardPerfilManoela from "../../components/card/card/cardPerfil/CardPerfilManoela";
import CardPerfilFelipe from "../../components/card/card/cardPerfil/CardPerfilFelipe";
import CardPerfilHercules from "../../components/card/card/cardPerfil/CardPerfilHercules";
import CardPerfilVanessa from "../../components/card/card/cardPerfil/CardPerfilVanessa";
import CardPerfilVini from "../../components/card/card/cardPerfil/CardPerfilVini";
function sobre() {
    return (
        <>

            <h1>E-lasGen !</h1>
            <h2> Objetivo </h2>
            <p>A crise sanitária da COVID-19 tem resultado em uma queda substancial no emprego em diversos países do mundo, e os impactos têm se mostrado ainda mais acentuados para mulheres. Os desafios para ampliar a participação feminina no mercado de trabalho – que já eram significativos antes da pandemia – tornaram-se ainda mais críticos no contexto de crise que vivemos, fazendo com que países como o Brasil cheguem a patamares históricos que configuram retrocessos de mais de 30 anos. </p>


            <p> Nosso projeto visa movimentar a economia para mulheres, buscando incentivar o comércio e, com isso, aumentar e/ou gerar renda para mulheres que são responsáveis pelo sustento de suas familia e que se encontram em situação de instabilidade financeira devido a crise econômica que estamos vivendo no período “pós” pandemia.</p>
            <h2>Sobre nós</h2>
            <p>Projeto final do bootcamp idealizado pela Generation Brasil, utilizando de técnicas de programação, soft skills e metodologias ágeis para construção dessa aplicação.

            </p>

            <Box className="ContainerPerfil">
                <CardPerfilDarioReis/>
                <CardPerfilLeoRampazi/>
                <CardPerfilManoela/>
                <CardPerfilFelipe/>
                <CardPerfilHercules/>
                <CardPerfilVanessa/>
                <CardPerfilVini/>
            </Box>
            

        </>
    );
}
export default sobre;