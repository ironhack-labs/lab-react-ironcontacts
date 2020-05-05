import React from 'react'
import './People.css'

const People = ({ picture, name, popularity, removePerson }) => {

	return (
		<>
			<tr className='each-row'>
                <td>
                    <img src={picture} alt={name}/>
                </td>
				<td>{name}</td>
				<td>{popularity}</td>
                <td><button onClick={ removePerson }>Borrar</button></td>
			</tr>
		</>
	)
}

export default People
