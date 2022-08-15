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
        <Box className="box1">
          <Box>
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
          <Box display="flex" alignItems="center" justifyContent="center"></Box>
        </Box>
        <Box className="box2">
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              className="textos"
              align="center"
            >
              Copyright © 2022 Todos direitos reservados a ElasGen Generation
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Footer;
