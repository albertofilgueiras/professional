import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CerebroAltaPerformance from "./pages/FortalezaEmocional";
import Livros from "./pages/Livros";
import CursoProcessosBasicos from "./pages/CursoProcessosBasicos";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/programa-cerebro-alta-performance" element={<CerebroAltaPerformance />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/curso-psicologia-processos-basicos" element={<CursoProcessosBasicos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
