import './App.css';
import TableList from './components/TableList/TableList';
import ContactsData from './contacts.json';
const originals = [...ContactsData];

function App() {

  const contacts = originals.slice(0, 5);
  const remainContacts = originals.slice(5);

  return (
    <div className="App"> 
    <h1>IronContacts</h1>    
    <TableList contacts={contacts} remainContacts={remainContacts}/>      
    </div>
  );
}

export default App;
