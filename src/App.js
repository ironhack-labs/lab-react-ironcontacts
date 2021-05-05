import './App.css';
import Contacts from './Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>IronContacts</h1>
        <div id="contact-wrapper">
          <Contacts />
        </div>
      </header>
    </div>
  );
}

export default App;
