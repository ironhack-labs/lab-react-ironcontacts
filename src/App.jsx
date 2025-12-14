import { useState } from 'react';
import './App.css';
import AddContact from './components/add-contact';
import Contact from './components/contact';
import SortContact from './components/sort-contact';

function App() {

  const [contactData, setContactData] = useState([]);
  
  return (
    <div className="App container">
      <h1>LAB | React IronContacts</h1>
      
      <div className='py-3'>
        <AddContact contact={contactData} setContactData={setContactData} />
        <SortContact contact={contactData} setContactData={setContactData} />
      </div>
      
      <div className='py-3'>
        <Contact contacts={contactData} setContactData={setContactData} />
      </div>
    </div>
  );
}

export default App;
