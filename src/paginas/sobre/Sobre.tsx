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
import CardPerfilRebeca from "../../components/card/card/cardPerfil/CardPerfilRebeca";
import { Typography } from '@material-ui/core';

function sobre() {
    return (
        <>
            <Box className="ContainerBoxTitulo">
                <Typography className="BoxTitulo">E-lasGen !</Typography>
            </Box>

            <Box className="ContainerBoxSubtitulo">
                <Typography className="BoxSubtitulo">Objetivo</Typography>
            </Box>

            <Box className="ContainerBoxDescricao">
                <Typography className="BoxDescricao">
                A crise sanitária da COVID-19 tem resultado em uma queda substancial no emprego em diversos países do mundo, e os impactos têm se mostrado ainda mais acentuados para mulheres. Os desafios para ampliar a participação feminina no mercado de trabalho – que já eram significativos antes da pandemia – tornaram-se ainda mais críticos no contexto de crise que vivemos, fazendo com que países como o Brasil cheguem a patamares históricos que configuram retrocessos de mais de 30 anos.
                </Typography>

                <Typography className="BoxDescricao">
                Nosso projeto visa movimentar a economia para mulheres, buscando incentivar o comércio e, com isso, aumentar e/ou gerar renda para mulheres que são responsáveis pelo sustento de suas familia e que se encontram em situação de instabilidade financeira devido a crise econômica que estamos vivendo no período “pós” pandemia.
                </Typography>
            </Box>
            


            <Box className="ContainerBoxSubtitulo">
                <Typography className="BoxSubtitulo">Sobre nós</Typography>
            </Box>

            <Box className="ContainerBoxDescricao">
                <Typography className="BoxDescricao">
                Projeto final do bootcamp idealizado pela Generation Brasil, utilizando de técnicas de programação, soft skills e metodologias ágeis para construção dessa aplicação.
                </Typography>
            </Box>

            <Box className="ContainerBoxSubtitulo Alinhamento">
                <Typography className="BoxSubtitulo">Equipe de desenvolvimento</Typography>
            </Box>

            <Box className="ContainerPerfil">
                <CardPerfilLeoRampazi/>
                <CardPerfilManoela/>
                <CardPerfilFelipe/>
                <CardPerfilHercules/>
                <CardPerfilVanessa/>
                <CardPerfilVini/>
                <CardPerfilRebeca/>
                <CardPerfilDarioReis/>
            </Box>
            

        </>
    );
}
export default sobre;