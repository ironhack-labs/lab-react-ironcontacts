import './App.css';
import ContactList from './components/contact-list/ContactList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ContactList 
            title="IronContacts"

          />
        </div>
      </div>
    </div>
  );
}

export default App;
