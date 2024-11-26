import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"

function App() {
  const [producers, setContacts] = useState(contacts
    .filter((contact, index) => index <= 4)  //Get firs 5 contacts
  )
  // const handleRandom = () => {
  //   const RandomIndex = Math.ceil(Math.random() * contacts.length) //-->Floor
  //   const contact = contacts.filter((c, i) => i === RandomIndex)
  //   producers.forEach(p => {
  //     if (p.id === contact.id) {
  //       handleRandom();
  //     } else {
  //       setContacts(contact.concat(producers));
  //     }
  //   })
  // }
  const handleRandom = () => {
    // Generar un índice aleatorio válido
    const randomIndex = Math.floor(Math.random() * contacts.length);

    // Obtener el contacto aleatorio
    const contact = contacts[randomIndex];

    // Comrobar si ya existeen producers
    const exists = producers.some((p) => p.id === contact.id);

    if (!exists) {
      // Si no existe, agregarlo a contacts
      setContacts([contact, ...producers]);
    } else if (contacts.length > producers.length) {
      // Si existe, intentar nuevamente
      handleRandom();
    } else {
      window.alert("Ya tienes todos los contactos importados")
    }
  };
  const handleSortPopularity = () => {
    const copyArray = Array.from(producers);
    const contactsByPopularity = copyArray.sort((producerA, producerB) => (
      producerB.popularity - producerA.popularity
    ));
    setContacts(contactsByPopularity);
  }
  const handleSortName = () => {
    const copyArray = Array.from(producers);
    const contactsByName = copyArray.sort((producerA, producerB) => (
      producerA.name.localeCompare(producerB.name)
    ));
    setContacts(contactsByName);
  }
  // const handleDelete = (event) => {
  const handleDelete = (id) => {
    const deleteFilter = producers.filter((p) => (
      p.id !== id // p.id !== event.target.id 
    ))
    setContacts(deleteFilter);
  }

  return (
    <div className="App">
      <h1 className="text-center display-4 text-primary my-4" > 🎬 LAB | React IronContacts 🎥 </h1>
      <div className="d-flex justify-content-center gap-2 mb-4">
        <button onClick={() => handleRandom()} className="btn btn-primary" type="button">Add Random Contact</button>
        <button onClick={() => handleSortPopularity()} className="btn btn-secondary" type="button">Sort by popularity</button>
        <button onClick={() => handleSortName()} className="btn btn-info" type="button">Sort by name</button>
      </div>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won an Oscar</th>
            <th scope="col">Won an Emmy</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {producers.map(p => (
            <tr key={p.id} >
              <td><img className="rounded" width="75px" src={p.pictureUrl} alt={p.name} /></td>
              <td className="pt-5">{p.name}</td>
              <td className="pt-5">{p.popularity.toFixed(2)}</td>
              {p.wonOscar ? <td className="fs-1 pt-4 ps-4">🏆</td> : <td></td>}
              {p.wonEmmy ? <td className="fs-1 pt-4">🌟</td> : <td></td>}
              {/* Opción idonea */}
              <td><button name="Delete" id={p.id} onClick={() => handleDelete(p.id)} className="mt-4" type="button">Delete</button></td> {/**Opción  onClick={(event) => handleDelete(event)}*/}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
