import './App.css';
import { Header } from './components/Header';
import { ContactList } from './components/ContactList';


function App() {
  return (
    <div className="App">

      <Header/>

      <div className='Main'>
        <ContactList/>
      </div>
      
    </div>
  );
}

export default App;
