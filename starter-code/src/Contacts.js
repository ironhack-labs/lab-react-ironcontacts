import React, {Component, useState} from 'react';
import contacts from './contacts.json';
import Celebs from './Celebs'

function Contacts() {
    const [selectedContacts,
        setSelectedContacts] = useState(contacts.slice(0, 5));

    function useCeleb(celeb) {
        return <Celebs
            key={celeb.id}
            name={celeb.name}
            pictureUrl={celeb.pictureUrl}
            popularity={celeb.popularity}/>
    };

    function handleClick() {
        let randomCeleb = contacts[Math.floor(Math.random() * contacts.length)];
        console.log(randomCeleb);
        // selectedContacts.push(randomCeleb)
        setSelectedContacts(...selectedContacts, randomCeleb)
        console.log(selectedContacts);
    }

    return (
        <div>
            <button onClick={handleClick}>Add Random Contact</button>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedContacts.map(useCeleb)}
                </tbody>
            </table>
        </div>
    )
}

// Class component class Contacts extends Component {   state = {     contacts :
// contacts.slice(0,5)   }   addRandomContact = ()=> {     let tmpCopy =
// [...this.state.contacts];     // get a random contact     // push random
// contact to tmpCopy using contacts from contacts.json     // set contacts to
// tmpCopy using this.setState   }   render() {return <table>   <button>Add
// random contact</button>   <thead>     <tr>       <th>Picture</th>
// <th>Name</th>       <th>Popularity</th>     </tr>   </thead>   <tbody>
// {(this.state.contacts.map((contact)=>{     // return the Celeb component with
// the correct contact props   } }   </tbody></table>}   }

export default Contacts;