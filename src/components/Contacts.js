import React, {useState} from 'react'
import contacts from '../contacts.json';
import { Table } from 'reactstrap';

function Contacts() {
    const [actors, setactors] = useState([])
    for (let i = 0; 1 < 5; i++){
        setactors([...actors, contacts[i]])
    }
    console.log(actors)
    return (
        <div>
        <h1>IronContacts</h1>
            <Table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((el, index) => (
                        <tr key={index}>
                        <td><img className='photo' src={el.pictureUrl} alt=""/></td>
                        <td>{el.name}</td>
                        <td>{el.popularity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Contacts
