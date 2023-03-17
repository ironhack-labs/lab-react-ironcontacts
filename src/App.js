import './App.css';
import ContactList from './components/contacts/ContactList';


function App() {
  return (
    <div className="App">
      <h1 className='font-extrabold text-5xl text-start mb-2 ml-2'>IronContacts</h1>
      <ContactList />

    </div>
  )
}

export default App;
