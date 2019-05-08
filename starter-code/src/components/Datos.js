import React from 'react'

function Datos({ contactsArr }) {
    return contactsArr.map((e, i, a) => {
        while(i<5)
        return (
            <tr key={i}>
                <td><img src={e.pictureUrl} width={'50px'} alt={e.name} /></td>
                <td>{e.name}</td>
                <td>{e.popularity}</td>
            </tr>
        )
    })
}
export default Datos
