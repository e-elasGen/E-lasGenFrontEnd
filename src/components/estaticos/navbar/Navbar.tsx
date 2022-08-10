import React from 'react';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';




function Navbar() {
  let history = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );

  function goLogout() {
    dispatch(addToken(''))
    alert('Usuário deslogado.')
    history('/login')
}

var navbarComponent;

if(token !== ""){
  navbarComponent = <AppBar position="static" className="background-navbar" >
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
      <Link to='/categorias' className='text-decorator-none'>
            <Box>
                <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer", color: "black" }}>
                    categorias
                </Typography>
            </Box>
        </Link>

        <Link to='/formularioCategorias' className='text-decorator-none'>
            <Box>
                <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer", color: "black" }}>
                    cadastrar categorias
                </Typography>

            </Box>
        </Link>

      <Box mx={1} className="cursor">
        <Link to="/sobre" className="text-decorator-none">
          <Typography variant="h6" color="inherit">
            Sobre
          </Typography>
        </Link>
      </Box>

      <Box mx={1} onClick={goLogout} className="cursor">
       
          <Typography variant="h6" color="inherit">
            logout
          </Typography>
       
      </Box>
    </Box>
  </Toolbar>
</AppBar>

}
  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
