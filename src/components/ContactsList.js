import { useState } from "react";
import data from "../data/contacts.json";

function ContacsList() {
  const [contacts, setContacts] = useState(data.slice(0,5))

  const handleAddRandomContact = () => {
      const notContacted = data.filter((contacted) => !contacts.includes(contacted))
      const random = notContacted[Math.floor(data.length * Math.random())];

      if(random){
        setContacts([random,...contacts])
      }
  }
  const handleSortByName = () => {
    setContacts([...contacts.sort((a,b) => a.name.localeCompare(b.name))])
  }
  const handleSortTopPopular = () => {
    setContacts([...contacts.sort((a,b) => b.popularity - a.popularity)])
  }
  const handleSortLessPopular = () => {
    setContacts([...contacts.sort((b,a) => b.popularity - a.popularity)])
  }
  const handleDelete = (contact) => {
    setContacts(contacts.filter((c) => contact !== c))
  };
  return (
    <div>
    <center>  <h1>IronContacts</h1></center>
    <center>  <h5>Contactos con popularidad debajo de 10 aparecen en rojo y los más populares tienen recuadro amarillo</h5></center>
    <center>
      <button onClick={handleAddRandomContact} className="btn btn-sm btn-primary">Add random contact</button>
      <button onClick={handleSortTopPopular} className="btn btn-sm btn-success mx-3">Order by most popular</button>
      <button onClick={handleSortLessPopular} className="btn btn-sm btn-warning">Order by less popular</button>
      <button onClick={handleSortByName} className="btn btn-sm btn-info mx-3">Order by name</button>
    </center>
      <table className="table">
        <thead>
          <tr> 
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>WonOscar</th>
            <th>WonEmmy</th>
          </tr>
        </thead>
        <tbody>
            {contacts.map((contact)=>(
            <tr key={contact.id} style={{backgroundColor: contact.popularity <= 10 ? "rgb(217, 98, 98, 0.3)" :"rgb(3, 221, 255, 0.3)"}} >
              <td> <img width="100px" src={contact.pictureUrl} alt="foto del contacto"  style={{border: contact.popularity >= 15 && "10px groove yellow" }}/> </td>
              <td>{contact.name}{}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
              <td><button className="btn btn-danger" onClick={() => handleDelete(contact)}>delete</button></td>
              
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
// backgroundColor: contact.popularity <= 10 ? "rgb(255, 3, 3)" :"rgb(3, 221, 255)"
export default ContacsList;
