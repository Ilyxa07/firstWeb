import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LogRegister from './components/Login'
import Main from "./components/Main";
import Registr from "./components/Registr";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile"
import Product from "./components/Product";
import { Reset } from 'styled-reset'



// Компонент для страниц аутентификации (без Header и Footer)
function AuthLayout({ children }) {
  return (
    <div className="app">
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

// Компонент для основных страниц (с Header и Footer)
function MainLayout({ children }) {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Reset/>
      <Routes>
       
        <Route path="/" element={<AuthLayout><LogRegister /></AuthLayout>} />
        <Route path="/Registr" element={<AuthLayout><Registr /></AuthLayout>} />
        <Route path="/Product" element={<AuthLayout><Product /></AuthLayout>} />
        <Route path="/Main" element={<MainLayout><Main /></MainLayout>} />
        <Route path="/Profile" element={<MainLayout><Profile /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App