import React, {useState} from 'react';
import contacts from '../contacts.json';

const initialState = contacts.slice(0, 5);

function Contacts (props){

    const [state, setState] = useState(initialState);

    function handleClick() {
        const randomNumber = Math.floor(Math.random() * (contacts.length - 5) + 5);

        state.push(contacts[randomNumber]);

       return setState([...state]);

    }

    function handleSortClick(key) {
       state.sort((a, b) => a[key] - b[key]); 

       return setState([...state]);
    }

    return (
        <div className = "container">
            <div className = "scrollable">
                <button type="button"
            </div>
        </div>
    )


    return (
        <div>
        <table> 
        <thead>
        <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        </tr>
        </thead>
        <tbody>
        {state.map(contact =>  {
            return (
                <tr>
                    <td>
                    <img src={contact.pictureUrl} alt="The actor" />
                    </td>
                </tr>
                <tr>
                    <td>{contact.name}</td>
                </tr>
                <tr>
                    <td>{contact.popularity}</td>
                </tr>
                )}

        </tbody>
       
       
        </table>
    </div>
    )

}

export default Contacts;