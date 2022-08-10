import React from "react";
import "./Navbar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Navbar() {
  let history = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  function goLogout() {
    dispatch(addToken(""));
    alert("Usuário deslogado.");
    history("/login");
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
      <AppBar position="static" className="background-navbar">
        <Toolbar variant="dense" className="container-navbar">
          <Box
            className="cursor container-navbar-logo"
          >
            <Typography variant="h5" color="inherit">
              E-lasGen
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="start"
            className="container-navbar-menu"
          >

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

            <Box>
              <Link to="/listacategorias" className="text-decorator-none">
                <Typography variant="h6" color="inherit" className="menu">
                  Categorias
                </Typography>
              </Link>
            </Box>

            <Box>
              <Link to="/formulariocategorias" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  Cadastrar Categorias
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

            <Box mx={1} onClick={goLogout} className="cursor">
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  return <>{navbarComponent}</>;
}

export default Navbar;
