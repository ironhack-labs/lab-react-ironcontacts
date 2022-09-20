import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import { useState } from "react";


function App() {
  const just6 = contacts.slice(0, 6)
  const [initContacts, setInitContacts] = useState(just6);

  const addActor = () => {
    const newContacts = [...initContacts]
    const index = Math.floor(Math.random() * (contacts.length - 5) + 6)
    newContacts.unshift(contacts[index])

    const cleanContacts = contacts.filter((actor) => actor.id !== contacts[index].id)
    contacts = cleanContacts

    setInitContacts(newContacts)
  }

  const orderByName = () => {
    const compare = (a, b) => {
      return a.name.localeCompare(b.name)
    }
    const orderedContacts = [...initContacts].sort(compare)
    console.log("Ordered-->", orderedContacts)
    console.log("Init-->", initContacts)
    setInitContacts(orderedContacts)
  }

  const orderByPopularity = () => {
    const comparePopularity = (a, b) => {
      return (a.popularity - b.popularity)
    }
    const orderedContacts = [...initContacts].sort(comparePopularity)
    console.log("Ordered-->", orderedContacts)
    console.log("Init-->", initContacts)
    setInitContacts(orderedContacts)
  }

  return (
    <div className="App">
      <button onClick={addActor}>Random Actor</button>
      <button onClick={orderByPopularity}>Order by Popularity </button>
      <button onClick={orderByName}>Order by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        <tbody>
          {initContacts.map((actor) => {
            return (
              <tr key={actor.id}>
                <td><img className="tableImg" src={actor.pictureUrl} /></td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                <td>{actor.wonOscar ? <img className="trophy" src="https://images.assetsdelivery.com/compings_v2/sanek13744/sanek137441707/sanek13744170700443.jpg" alt="" /> : null}</td>
                <td>{actor.wonEmmy ? <img className="trophy" src="https://images.assetsdelivery.com/compings_v2/sanek13744/sanek137441707/sanek13744170700443.jpg" alt="" /> : null}</td>
                {/* https://images.assetsdelivery.com/compings_v2/sanek13744/sanek137441707/sanek13744170700443.jpg */}
              </tr>)

          })}
        </tbody>
      </table>



    </div>
  );
}

export default App;
