import "./App.css";
import contacts from "./contacts.json";
import ListaAtores from "./components/ListaAtores";
import { useState } from 'react';
// import AddAtor from "./components/AddAtor";


function App() {

  const [lista, setLista] = useState(contacts.slice(0,5));
  function addAtor(){
    let atorSelecionado = contacts[Math.floor(Math.random() * contacts.length)]

    const verificarDuplicidade = lista.find(ator => {
      return ator.name === atorSelecionado.name;
    });
    if(!verificarDuplicidade){
      const copy = [...lista]
      copy.push(atorSelecionado)
      setLista(copy)
    }
  }

  function classificarPopularidade(){
    const copy = [...lista]
    copy.sort(function(a,b) {
      return a.popularity > b.popularity ? -1 : a.popularity > b.popularity ? 1 : 0;
    })
    setLista(copy)
  }
  function classificarNome(){
    const copy = [...lista]
    copy.sort(function(a,b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })
    setLista(copy)
  }
  function deletar(id){
    const copy = [...lista]
    const deleteAtor = copy.filter(ator => {
      return ator.id !== id;
    });
    setLista(deleteAtor)
  }



  return <div className="App">
  <button onClick={addAtor}>Adiocionar Ator Aleatorio</button>
  <button onClick={classificarPopularidade}>Classificar por Popularidade</button>
  <button onClick={classificarNome}>Classificar por Nome</button>
  <ListaAtores lista={lista} deletar={deletar}/> 
  </div>;
  
 

}
export default App;