import React from "react";
import "./NavbarUsuario.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function NavbarUsuario() {
  let history = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    history("/home");
  }

  var navbarComponent;
  var navbarComponentUsuario;
  //var navbarComponentAdmin;

   if (token !== "") {
  navbarComponent = 
      <AppBar position="static" className="background-navbar">
        <Toolbar variant="dense" className="container-navbar">
          <Box className="cursor container-navbar-logo">
            <Typography variant="h5" color="inherit">
              <Box>
                <img
                  className="logo"
                  src="https://i.imgur.com/SoWe6xn.png"
                  alt="logo da empresa elas gen"
                />
              </Box>
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="start"
            className="container-navbar-menu"
          >
            <Box mx={1} className="cursor ">
              <Link to="/home" className="text-decorator-none">
                <Typography variant="h6" color="inherit" className="containerMenu">
                  Home
                </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor">
              <Link to="/produtos" className="text-decorator-none">
                <Typography variant="h6" color="inherit"  className="containerMenu">
                  Produtos
                </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor">
              <Link to="/dashbord" className="text-decorator-none">
                <Typography variant="h6" color="inherit" className="containerMenu">
                  Dashbord
                </Typography>
              </Link>
            </Box>
            

            {/* <Box>
        <Link to="/listacategorias" className="text-decorator-none">
          <Typography variant="h6" color="inherit" className="menu">
            Categorias
          </Typography>
        </Link>
      </Box> */}

            {/* <Box>
        <Link to="/formulariocategorias" className="text-decorator-none">
          <Typography variant="h6" color="inherit">
            Cadastrar Categorias
          </Typography>
        </Link>
      </Box> */}

            <Box mx={1} className="cursor">
              <Link to="/sobre" className="text-decorator-none">
                <Typography variant="h6" color="inherit" className="containerMenu">
                  Sobre
                </Typography>
              </Link>
            </Box>

            <Box mx={1} onClick={goLogout} className="cursor">
              <Typography variant="h6" color="inherit" className="containerMenu">
                Logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
       }
       if (token === "") {
        navbarComponentUsuario = 
      <AppBar position="static" className="background-navbar">
        <Toolbar variant="dense" className="container-navbar">
          <Box className="cursor container-navbar-logo">
            <Typography variant="h5" color="inherit">
              <Box>
                <img
                  className="logo"
                  src="https://i.imgur.com/SoWe6xn.png"
                  alt="logo da empresa elas gen"
                />
              </Box>
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="start"
            className="container-navbar-menu"
          >
            <Box mx={1} className="cursor">
              <Link to="/home" className="text-decorator-none">
                <Typography variant="h6" color="inherit" className="containerMenu">
                  Home
                </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor">
              <Link to="/produtos" className="text-decorator-none">
                <Typography variant="h6" color="inherit" className="containerMenu">
                  Produtos
                </Typography>
              </Link>
            </Box>

            

            {/* <Box>
        <Link to="/listacategorias" className="text-decorator-none">
          <Typography variant="h6" color="inherit" className="menu">
            Categorias
          </Typography>
        </Link>
      </Box> */}

            {/* <Box>
        <Link to="/formulariocategorias" className="text-decorator-none">
          <Typography variant="h6" color="inherit">
            Cadastrar Categorias
          </Typography>
        </Link>
      </Box> */}

            <Box mx={1} className="cursor">
              <Link to="/sobre" className="text-decorator-none">
                <Typography variant="h6" color="inherit" className="containerMenu">
                  Sobre
                </Typography>
              </Link>
            </Box>

            <Box mx={1}  className="cursor">
            <Link to="/login" className="text-decorator-none">
              <Typography variant="h6" color="inherit" className="containerMenu">
                logar
              </Typography>
            </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
        
       
       }
       return (
        <>
     {navbarComponent}
     {navbarComponentUsuario}
    </> 
    )

}

export default NavbarUsuario;
