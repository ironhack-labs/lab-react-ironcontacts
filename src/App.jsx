import { useState } from "react";
import "./App.css";
import contactData from './contacts.json'




function App() {

  // const [contacts, setContacts] = useState(contactData)
  const [firstFiveContacts, setFirstFiveContacts] = useState(contactData.slice(0, 5))

  // const firstFiveContacts = contacts.splice(0, 5)


  const addRandomContact = () => {

    //primero vamos a establecer la regla de contactos disponibles

    const availableContacts = contactData.filter(contact => !firstFiveContacts.includes(contact))

    //metemo dos metodos el filter para extraer los contactos de la lista que no sean de los cinco
    //primeros contactos y despues inteliglentemente añadimos el metodo iclude para que añada cualuier contacto

    //esto es opcional, para el caso de que nos quedemos sin cotactos para añadir:

    if (availableContacts.length === 0) {
      alert('there is no more contacts in the data')

    }

    //hacemos el randomizer con la formula tipica pero con la variable de contactos disponibles

    const randomIndex = Math.floor(Math.random() * availableContacts.length)
    const randomContact = availableContacts[randomIndex]
    //aqui llamamos al actualizador de estado y le decimos qie priemro saque el randomConatct y despues todo lo demas con el spread operator.
    setFirstFiveContacts([randomContact, ...firstFiveContacts])

  }

  const sortByName = () => {

    //muy interesante el uso de slice aqui, ya que crea una copia del array original
    //de forma que cuando usamos el sort no afecta a este sino a la copia...
    //de la misma forma creo que se podria haber hecho con la copia simple del spread op.

    const sortedContactsByName = firstFiveContacts.slice().sort((a, b) => {
      //a y b representan dos elementos del array que se estan comparando
      let nameA = a.name.toLowerCase()
      let nameB = b.name.toLowerCase()
      //las variables se usan para almacenar los nombres de los contactos que estamos comparando
      //en minusculas

      // (recuerda que "a" y "b" son los elementos que estas comparando)
      //en su momento a.name y b.name(name del array de contactos)
      if (nameA < nameB) {
        return -1
      }
      //si nameA es menor que nameB devuelve -1 lo que indica que a debe ponerse por delante de b
      if (nameA > nameB) {
        return 1
      }
      //si nameA es mayor que nameB devuelve 1 lo que indica que a debe ponerse por detras de b
      return 0
      //si son iguales retorna 0 lo que significa que el orden no importa.
    })

    setFirstFiveContacts(sortedContactsByName)
  }

  const sortByPopularity = () => {

    const sortedByPop = firstFiveContacts.slice().sort((a, b) => {

      let pop1 = a.popularity
      let pop2 = b.popularity

      if (pop1 < pop2) {

        return 1
      }

      if (pop1 > pop2) {
        return -1
      }

      return 0
    })

    setFirstFiveContacts(sortedByPop)
  }

  const deleteContact = (contactId) => {
    const deletedContacts = firstFiveContacts.filter(contact => {
      return contact.id !== contactId
    })

    setFirstFiveContacts(deletedContacts)
  }





  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="button-container">
        <button onClick={addRandomContact}>Add random contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>


      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Ocar</th>
            <th>Won Emmy</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {firstFiveContacts.map((contact, index) => (
            <tr key={contact.id} className="contact-list">
              <td><img className="contact-pictureUrl" src={contact.pictureUrl} alt="contact" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🌟"}</td>
              <td>
                <button className="dlt-button" onClick={() => deleteContact(contact.id)}>Delete </button>
              </td>


            </tr>
          ))}
        </tbody>


      </table>
    </div>
  );
}

export default App;


