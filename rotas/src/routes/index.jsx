import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Empresa from "../pages/Empresa";
import Noticias from "../pages/Noticias";
import Contato from "../pages/Contato";
import Sobre from '../pages/Sobre';
import Erro from "../pages/Erro";
import Produto from "../pages/Produto";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/empresa" element={<Empresa />}></Route>
      <Route path="/noticias" element={<Noticias />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
      <Route path="/sobre" element={<Sobre />}></Route>
      <Route path="*" element={<Erro/>}> </Route>
      <Route path="/produto/:id" element={<Produto/>}> </Route> 
    </Routes>
  );
}
