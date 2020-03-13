import React from "react";
import ReactDOM from "react-dom"; // Esto se usa para renderizar la id=root (el div que hay en index.html)
import logo from "../public/logo.svg"; // Importamos el logo porque en el return no pilla la ruta
import "./App.css"; // Importamos el CSS pero ojo: no se llama con class si no con className
import styled from "styled-components";
import { Ironcontacts } from "./ironcontacts"; // Importamos el archivo en el que trabajaremos los contactos

// Este archivo carga como un script en index.html

// App es una constante que es una función.  La llamo desde el render del addEventListener de más abajo
const App = () => {
  return (
    // Devuelvo todo el objeto que quiero pintar. Incluye el objeto Ironcontacts, que lo hemos importado antes
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to IronContacts</h1>
      </header>
      <Ironcontacts />
    </div>
  );
};

// Aquí le digo que en cuanto cargue un id=root tiene que devolver el objeto que devuelve App. Eso pasa en index.html
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
