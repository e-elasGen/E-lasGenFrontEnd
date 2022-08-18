import React from "react";
import "./Footer.css";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <>
      <Grid alignItems="center" className="containerFooter" item xs={12}>
        
        <Box className="containerRodapePrincipal">
          <Box>
              
                <img
                  className="logoFooter"
                  src="https://i.imgur.com/SoWe6xn.png"
                  alt="logo da empresa elasGen"
                />
                <Typography className="textoFooter">
                 Siga-nos 
                </Typography>
                <Box className="imgFooter">

                <img className="imgFooter1" src="https://i.imgur.com/eKUM40q.png" />
          
            <img className="imgFooter1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />

            <img className="imgFooter1" src="https://i.imgur.com/TsFYaAs.png" />
            </Box>
            </Box>
    
          <Box flexDirection="column" className="textoFooter1">
            <Link to="/home" className="text-decorator-none">
            Home
            </Link>
            </Box>

            <Box flexDirection="column" className="textoFooter1">
            <Link to="/produtos" className="text-decorator-none">
            Shop
            </Link>
            </Box>

            <Link to="/sobre" className="text-decorator-none">
            About Us
            </Link>

            <Link to="/login" className="text-decorator-none">
            Login
            </Link>

          

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="containerRodapePrincipalLinks"
          >
           
          </Box>
        </Box>

        <Box className="ContainerRodapeEnd">
          <Typography
            variant="subtitle2"
            gutterBottom
            className="rodapeEndTexto"
          >
            Copyright © 2022 Todos direitos reservados a E-lasGen
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default Footer;
