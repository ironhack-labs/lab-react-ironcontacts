import './App.css';
import {useEffect, useState} from 'react'

import { Table } from './components'

function App() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('contacts.json')
        .then((res) => res.json())
        .then((data) => {
          setActors(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
  }, [])

  return (
    <div className="App">
      <h1>IronContacts</h1>
      {actors && <Table array={actors} />}
   
    </div>
  );
}

export default App;
