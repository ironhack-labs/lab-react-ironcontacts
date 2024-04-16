
import { useState } from "react";
import './Table.css';



function Table({ props }) {
    const [contacts, setContacts] = useState(props.slice(0, 5));
    const [othersContacts, setOthersContacts] = useState(props.slice(5, props.length));

function randomContact() {
    const availableContacts = [... othersContacts];
    let randomContact = Math.floor(Math.random() * othersContacts.length);
    let removeContact = availableContacts.splice(randomContact, 1) [0];
    const updateContacts = [removeContact, ...contacts];

    setContacts(updateContacts)
    setOthersContacts(availableContacts);
}

function sortByName() {
    const copyOfContacts = [... contacts];
    const sortContactsByName = copyOfContacts.sort((a,b) => {
        if (a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    });
    setContacts(sortContactsByName);
}

function sortByPopularity() {
    const copyOfContacts = [...contacts];
    const sortedContact = copyOfContacts.sort((a, b) => b.popularity - a.popularity);
    
    setContacts(sortedContact);
}

function deleteContact(id) {
    const copyOfContacts = [...contacts];
    const contactFiltered = copyOfContacts.filter((e) => e.id !==id);

    setContacts(contactFiltered)
}

const contactTable = contacts.map((e, index) => (
    <tr key={index} className="table-contact">
        <td><img src={e.pictureUrl} className="contact-image"/></td>
        <td className="name-contact">{e.name}</td>
        <td>{e.popularity}</td>
        <td>{e.wonOscar ? '🏆':''}</td>
        <td>{e.wonEmmy ? '🌟':''}</td>
        <td><button onClick={() => deleteContact(e.id)} className="btn btn-primary m-5">Delete</button></td>
    </tr>
))
    
    return (
    <div>
        <button onClick={() => randomContact()} className="random btn-btn primary m-5">NEW CONTACT</button>
        <button onClick={() => sortByName()} className="sort-name btn-btn primary m-5">NAME SORT</button>
        <button onClick={() => sortByPopularity()} className="popularity btn-btn primary m-5">MOST POPULAR</button>
        

        <table className="table">
            <thead>
              <tr>
                <th scope="col">Picture</th> 
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
                <th scope="col">Won a Oscar</th>
                <th scope="col">Won a Emmy</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
                {contactTable}
            </tbody>
        </table>
    </div>
  )
}

export default Table