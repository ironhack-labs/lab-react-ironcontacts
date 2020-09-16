import React from 'react';
import './App.css';
import Contact from "./components/Contact"
import styled from "styled-components";

const Main= styled.div`
  button{
    border:none;
    background-color:tomato;
    color:white;
    width:220px;
    heigth:20px;
    padding:20px 15px;
    border-radius:10px;
    font-size:18px;
    margin:10px;
  }
`

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Main>
       <Contact />
      </Main>
    </div>
  );
}

export default App;
