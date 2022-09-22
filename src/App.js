import './App.css';
import TableList from './components/TableList/TableList';
import ContactsData from './contacts.json';

const originals = [...ContactsData];

function App() {

  const contacts = originals.slice(0, 5);

  return (
    <div className="App">

      
      <TableList contacts={contacts}/>
      
    </div>
  );
}

export default App;
