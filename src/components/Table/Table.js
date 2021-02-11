import React, {useState} from "react"

function Table({data}){
  //Crear arr con los 5 primeros contactos
  const printContacts = data.slice(0,5)
  //Crear estado y funcion que actualiza estado
  const [contacts, setContact] = useState(printContacts)

  const addContact = () =>{
    const random = Math.round(Math.random() * data.length-1) + 0
    return data[random]
  }
  const deleteById = (id) =>{
    contacts.forEach((contact, index) =>{
      if (id === contact.id){
        contacts.splice(index,1)
      }
    })
  }
  const sortByName = () =>{
    contacts.sort((a,b) => a.name.localeCompare(b.name))
  }
  const sortByPopularity = () =>{
    contacts.sort((a,b) => b.popularity - a.popularity)
  }

  const handleRandom = () => {
    setContact([...contacts, addContact()])
  }
  const handleName = () => {
    sortByName();
    setContact([...contacts])
  }
  const handlePopularity = () => {
    sortByPopularity()
    setContact([...contacts])
  }
  const handleDelete = (id) =>{
    deleteById(id);
    setContact([...contacts])
  }

  return (
    <div className="container">
    <h2>IronContacts</h2>
    <div className="container-row">
      <button onClick={handleRandom}>Add Random Contact</button>
      <button onClick={handleName}>Sort by name</button>
      <button onClick={handlePopularity}>Sort by popularity</button>
    </div>
    <table>
      <tbody>
        <tr>
          <th className="center">Picture</th>
          <th >Name</th>
          <th>Popularity</th>
        </tr>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td className="center">
              <img src={contact.pictureUrl} alt={contact.name} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>
              <button onClick={()=>handleDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
  
}



export default Table