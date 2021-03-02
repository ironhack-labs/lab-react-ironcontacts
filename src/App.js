import logo from './logo.svg';
import './App.css';
import ContactList from './components/contact-list/ContactList';

function App() {
  return (
    <div className="App">
      <div className="container">
      <ContactList className="w-50" />
      </div>
      
    </div>
  );
}

export default App;
