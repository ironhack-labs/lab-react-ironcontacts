import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactList from './components/ContactList';
import Buttons from './components/Buttons';
import ContactContextProvider from './contexts/ContactContext';
import Container from 'react-bootstrap/Container';



const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">IronContacts</h1>
    </header>
    <div>
      <ContactContextProvider>
        <Container className="mt-4">
          <Buttons/>
          <ContactList/>
        </Container>
      </ContactContextProvider>
    </div>
  </div>
);

export default App;
