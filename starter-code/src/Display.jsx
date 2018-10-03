import React from 'react'
import contacts from './contacts.json'

const Display = ({name,pictureUrl,popularity}) => {
    return(
        <div>
           <h2>Iron Contacts</h2>
           <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                <tr>
                    <td> <img src={pictureUrl}/></td>
                    <td>{name}</td>
                    <td >{popularity}</td>
                </tr>
            </table>
        </div>
    )
}



export default Display