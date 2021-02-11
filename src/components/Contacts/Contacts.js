import React from 'react';


function Contacts (data) {

    return (
        <div>
        <table>
            <thead>
                <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr key={data.id}>
                <td ><img src={data.pictureUrl} alt="" width='80px' /></td>
                <td >{data.name}</td>
                <td>{data.popularity}</td>
                <td><button type="button" onClick={data.clickToDelete}>Delete</button></td>
                </tr>
                
            </tbody>  
        </table>
        </div>
    )
    
}

export default Contacts