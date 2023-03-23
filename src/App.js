import './App.css';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <h1 className='py-4'>Ironcontacts</h1>
      <div className='container'>
        <ContactList />
      </div>

    </div>
  );
}

export default App;
