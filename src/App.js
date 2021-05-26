import logo from './logo.svg';
import './App.css';
import { Contatos } from './Components/Contatos';
import con from './contacts.json'

function App() {
  return (
    <div className=" mt-5 container">
      <Contatos/>
    </div>
  );
}

export default App;
