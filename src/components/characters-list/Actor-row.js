import React from 'react';

const CharacterRow = ({ name, pictureUrl, popularity, deleteActor }) => {

    return (

        <tr>

            <td><img src={pictureUrl} alt={name}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button className='delete-button' onClick={deleteActor}>{'Delete'}</button></td>
        </tr>
    )
}

export default CharacterRow;