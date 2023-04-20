import { useState } from 'react'
import React from "react";
import { Routes,Route} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Componente da tela inicial */}
        <Route index element={<Home />} />
        {/* Componente de uma rota específica */}
        <Route path="/pagina1" element={<Pagina1 />} />
        {/* Componente para quando não encontrar uma rota */}
        <Route path="/pagina2" element={<Pagina2 />} />
      </Routes>
    </div>
  );
};
export default App;
