import React from "react";
import "./Navbar.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor" style={{ marginRight: "65%" }}>
            <Typography variant="h5" color="inherit">
              E-lasGen
            </Typography>
          </Box>
          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Link to="/home" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Link>
            </Box>
            <Box mx={1} className="cursor">
              <Link to="/produtos" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  Produtos
                </Typography>
              </Link>
            </Box>
            <Box mx={1} className="cursor">
              <Link to="/sobre" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  Sobre
                </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor">
              <Link to="/home" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
