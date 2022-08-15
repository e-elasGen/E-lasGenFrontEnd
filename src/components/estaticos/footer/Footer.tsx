import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  return (
    <>
      <Grid alignItems="center" className="containerFooter" item xs={12}>

        <Box className="containerRodapePrincipal">
          
          <Box className="containerRodapePrincipalSobre">
            <Typography
              variant="subtitle2"
              gutterBottom
              className="textos"
              align="center"
            >
              SOBRE
            </Typography>
            Projeto final do bootcamp idealizado pela Generation Brasil,
            utilizando de técnicas de programação, soft skills e metodologias
            ágeis para construção dessa aplicação.
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="containerRodapePrincipalTecnologias"
          >
            TECNOLOGIAS USADAS
            Java
            Spring
            MySql
            JavaScript
            ReactJs

          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="containerRodapePrincipalLinks"
          >
            LINKS
             Home 
             Produtos
              Sobre
          </Box>
        </Box>

        <Box className="ContainerRodapeEnd">
          <Typography
            variant="subtitle2"
            gutterBottom
            className="rodapeEndTexto"
            align="center"
          >
            Copyright © 2022 Todos direitos reservados a ElasGen Generation
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default Footer;
