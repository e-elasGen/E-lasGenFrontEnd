import { Button, TextField, Typography } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import "./FaleConosco.css";


function FaleConosco() {
  return (
    <>
      <Grid className="containerFaleConosco">
        <Grid xs={6} alignItems="center">
        <Box className="containerFaleConoscoTxt">
        <Typography className="faleConoscoTitulo">NEWSLETTER</Typography>
        </Box>
        <Box className="containerFaleConoscoTxt">
          <Typography className="faleConoscoTxt">Cadastre seu e-mail e fique por dentro dos projetos e novidades.</Typography>
        </Box>
        </Grid>

        <Grid xs={6} alignItems='center'>
        <Box className="inputs">
          
          <TextField
            id="nome"
            label="Seu nome"
            variant="outlined"
            name="email"
            margin="normal"
            fullWidth
            className="container-input"
          />
          <TextField
            id="email"
            label="Seu e-mail"
            variant="outlined"
            name="email"
            margin="normal"
            fullWidth
            className="container-input"
          />
          
          <Box className="btnInput">
          <Button type="submit" className="custom-btn btn">
            Cadastrar
          </Button>
          </Box>
        </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default FaleConosco;
