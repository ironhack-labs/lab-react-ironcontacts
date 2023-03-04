import "./App.css";
import contacts from "./contacts.json";
import ListaAtores from "./components/ListaAtores";


function App() {
  const lista = contacts.splice(0,5);
  
  return <div className="App">
  <ListaAtores lista={lista}/> 
  </div>;
  
 

}
export default App;