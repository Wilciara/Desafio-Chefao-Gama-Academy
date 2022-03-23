import React from "react";

import "./styles.css";


import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header id="menu">
      <div className="wrapper">
        <img className="logo" alt="Logo" />

        <nav>
          <a href="">Candidato</a>
          <a href="/sobre">Empresa</a>
          <a href="">Inscrever-se</a>
          <span className="divisor"></span>
          <a href="">Suporte</a>
          <a href="">Entrar</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;