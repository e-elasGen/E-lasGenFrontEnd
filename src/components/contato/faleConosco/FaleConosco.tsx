import { Button, TextField, Typography } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import React from "react";
import "./FaleConosco.css";

function FaleConosco() {
  return (
    <>
      <Grid className="containerFaleConosco">
        <Box className="containerFaleConoscoTitulo">
          <Typography className="faleConoscoTitulo">Envie seu e-mail e entraremos em contato</Typography>
        </Box>
        <Box>
          <TextField
            id="email"
            label="Seu e-mail"
            variant="outlined"
            name="email"
            margin="normal"
            fullWidth
            className="container-input"
          />
          <Button type="submit" className="custom-btn btn">
            Enviar
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default FaleConosco;
