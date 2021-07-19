import React from 'react';

function ContactCard(props){
    const {handleDelete, contact:{name, pictureUrl, popularity, id}} = props
    return (
        <tr>
            <td> <img src={pictureUrl} alt="{pictureUrl}"> </td>
            <td> {name} </td>
            <td> {popularity} </td>
            <td> <button className='btn-delete' onClick={() => handleDelete(id)}> Delete </button> </td>

        </tr>
    )
}
