import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";


function App() {

    const firstContact = contacts.slice(0,5)  
    
    const [contact, setContacts] = useState(firstContact)

    console.log(contact)

    const indexRandom = Math.floor(Math.random() * (contacts.length - 5)) + 5;

    const randomContact = contacts.slice(indexRandom,indexRandom + 1) 

    const addContact = () =>{

      const contactsCopy = [...contact]

      contactsCopy.unshift(...randomContact)

      setContacts(contactsCopy)
    }

    const shortName = () =>{
        
      const nameContact = [...contact]
      nameContact.sort(function (a,b){
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      })
      
      setContacts(nameContact)
    }



  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Añadir Contacto</button>
      <button onClick={shortName}>Ordenar Nombre</button>
      {/* <button onClick={ShortPopu}>Ordenar Popularidad</button> */}
      <table>
    <thead>
        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>wonOscar</th>
            <th>wonEmmy</th>
        </tr>
    </thead>
    <tbody>
  {
    contact.map(elm => {

      return(

        <tr>
            <td><img src={elm.pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{elm.name}</td>
            <td>{elm.popularity}</td>
            <td>{elm.wonOscar && <h1>🏆</h1>}</td>
            <td>{elm.wonEmmy && <h1>🏆</h1>}</td>
            <td></td>
        </tr>
      )
    })
  }
  
             {/* <tr>
            <td><img src="https://i.blogs.es/04cc82/nicolas-cage-meme/1366_2000.jpeg" alt="pic" style={{ width: "50px" }} /></td>
            <td>Nicolas Cage</td>
            <td>8</td>
        </tr>

        <tr>
            <td><img src="https://i.blogs.es/04cc82/nicolas-cage-meme/1366_2000.jpeg" alt="pic" style={{ width: "50px" }} /></td>
            <td>Nicolas Cage</td>
            <td>8</td>
        </tr>

        <tr>
            <td><img src="https://i.blogs.es/04cc82/nicolas-cage-meme/1366_2000.jpeg" alt="pic" style={{ width: "50px" }} /></td>
            <td>Nicolas Cage</td>
            <td>8</td>
        </tr>

        <tr>
            <td><img src="https://i.blogs.es/04cc82/nicolas-cage-meme/1366_2000.jpeg" alt="pic" style={{ width: "50px" }} /></td>
            <td>Nicolas Cage</td>
            <td>8</td>
        </tr> */}
    </tbody>
</table>

    </div>
  );
}

export default App;
