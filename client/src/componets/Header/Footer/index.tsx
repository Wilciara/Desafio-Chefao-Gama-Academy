import React from "react";

import Lista from "../../Lista";

import "./styles.css";

import { Link } from "react-router-dom";
const listaEmpresa = [
  {
    nome: "Sobre",
    link: "#",
  },
  {
    nome: "Empregos",
    link: "#",
  },
  {
    nome: "For the Record",
    link: "#",
  },
];

const listaComunidades = [
  {
    nome: "Para Artistas",
    link: "#",
  },
  {
    nome: "Desenvolvedores",
    link: "#",
  },
  {
    nome: "Publicidade",
    link: "#",
  },
  {
    nome: "Investidores",
    link: "#",
  },
  {
    nome: "Fornecedores",
    link: "#",
  },
];

const listaLinks = [
  {
    nome: "Suporte",
    link: "#",
  },
  {
    nome: "Player da Web",
    link: "#",
  },
  {
    nome: "Aplicativo móvel grátis",
    link: "#",
  },
];

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <img className="logo"  alt="Logo" />
        <Lista titulo="EMPRESA" itens={listaEmpresa} />
        <Lista titulo="COMUNIDADES" itens={listaComunidades} />
        <Lista titulo="LINKS ÚTEIS" itens={listaLinks} />
        <div className="redes">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;