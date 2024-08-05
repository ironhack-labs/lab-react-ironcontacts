import "./App.css";
import jsonData from "./contacts.json";
import {useState} from "react";







function App() {

  // const [contacts, setContacts] = useState(jsonData);
const [contacts, setContacts] = useState(jsonData.slice(0,5));
const [newContacts, setNewContacts] = useState(jsonData.slice(5));

console.log(contacts);
// console.log("---");
//     console.log(setContacts);
// console.log(newContacts);



// const [wonOScar, setWonOScar] = useState(true);
// const [wonOScar, setWonOScar] = useState(jsonData.wonOscar);
// const [wonEmmy, setWonEmmy] = useState(true);

    const addRandomContact = () => {
        // setContacts(jsonData.slice(0,5));

        const randomContact = newContacts[Math.floor(Math.random() * newContacts.length)];
        console.log(randomContact);

        //add randomContact to contacts
        setContacts([...contacts, randomContact]);
    }

    const sortByName = () => {
        const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
        setContacts(sortedContacts);
    }

    const sortByPopularity = () => {
        const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
        setContacts(sortedContacts);
    }




    const deleteActor = () => {
        // const
    }


    return (
        <div className="App">

            <button onClick={addRandomContact}>Add Random Contact</button>
            <button onClick={sortByName}>Sort by name</button>
            <button onClick={sortByPopularity}>Sort by popularity</button>


            <table className="actor-table">
                <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won an Oscar</th>
                    <th>Won an Emmy</th>
                </tr>
                </thead>

                <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td><img className="actor-img" src={contact.pictureUrl} alt={contact.name}/></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                        <td>{contact.wonOscar ? "🏆" : ""}</td>
                        <td>{contact.wonEmmy ? "🌟" : ""}</td>
                        {/*  <td> {wonOScar ? "🏆" : "" } </td>
                  <td> {wonEmmy ? "🏆" : "" } </td>*/}
                    </tr>
                ))}
                </tbody>
            </table>


        </div>
    );
}

export default App;
