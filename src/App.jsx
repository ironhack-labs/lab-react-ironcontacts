import './App.css';
import { useState } from "react"
import ContactsList from './components/contactsList/contactsList';

function App() {

  return (

    <div className='App'>
      {<ContactsList />}
    </div>
  );
}

export default App;