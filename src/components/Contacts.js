import React from 'react'

function Contacts(props) {
 return (

    <div className={'sheet'}>

        <h1>IronContacts</h1>

        <button onClick={props.getRandom}>Add Random Contract</button>
        <button onClick={props.sortName}>Sort by name</button>
        <button onClick={props.sortPop}>Sort by popularity</button>

        <table>
        <tbody>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>
            {props.contacts.map((elem, index) => { return (
                <tr key={index}>
                    <td><img src={elem.pictureUrl} alt={''} style={{width: "5rem"}}/></td>
                    <td>{elem.name}</td>
                    <td>{elem.popularity}</td>
                    <td><button onClick={() => props.deleteContact(elem.name)}>Delete</button></td>
                </tr>
            )
            })}
            </tbody>
        </table>

    </div>

 );
}

export default Contacts;