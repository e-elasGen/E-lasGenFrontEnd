import React from 'react';
import './App.css';

import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Navbar from "./estaticos/navbar/Navbar";
import Footer from "./estaticos/footer/Footer";
import Produtos from "./paginas/produtos/Produtos";
import Sobre from "./paginas/sobre/Sobre";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "67.20vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
