import React, {useState} from 'react'
import contacts from '../contacts.json';
import { Table } from 'reactstrap';

function Contacts() {
    const [actors, setactors] = useState(contacts.filter((el, i) => i < 5))

    const addRandom = () => {
        let randomNumber = Math.floor(Math.random()*(contacts.length - 6) + 6)
        setactors([...actors, contacts[randomNumber]])
    }
    const sortName = () => {
        let sortedArray = [...actors].sort((a, b) => a.name.localeCompare(b.name))
        setactors(sortedArray)
    }
    const sortPopularity = () => {
        let sortedArray = [...actors].sort((a, b) => b.popularity - a.popularity)
        console.log(sortedArray)
        setactors(sortedArray)
    }

    return (
        <div>
        <h1>IronContacts</h1>
        <button onClick={() => addRandom()}>Add Random Contact</button>
        <button onClick={() => sortName()}>Sort by Name</button>
        <button onClick={() => sortPopularity()}>Sort by Popularity</button>
            <Table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {actors.map((el, index) => (
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
