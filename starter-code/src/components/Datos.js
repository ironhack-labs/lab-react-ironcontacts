import React from 'react'

const Datos = ({ contactsArr /* deleteContact */,handleClick }) => {
    return contactsArr.map((e, i, a) => {

        return (
            <tr key={i}>
                <td><img src={e.pictureUrl} width={'50px'} alt={e.name} /></td>
                <td>{e.name}</td>
                <td>{e.popularity}</td>
                <td><button onClick={handleClick} name='delete' value={i} >Borrar</button></td>
            </tr>
        )
    })
}
export default Datos

//<td><button onClick={() => deleteContact(i)}>Borrar</button></td>
