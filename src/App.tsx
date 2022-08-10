import React from 'react';
import './App.css';

import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Produtos from "./components/estaticos/produtos/Produtos";
import Sobre from "./paginas/sobre/Sobre";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store = {store}>
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
