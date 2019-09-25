import React from 'react'

export default function Contacts({data, borrar}) {
	return (
		<tr>
			<td><img src={data.pictureUrl} alt={data.name} width="100"/> </td>
			<td>{data.name}</td>
			<td>{data.popularity}</td>
			<td><button className="button is-danger is-fullwidth" onClick={ () =>borrar(data.popularity) }>Delete</button></td>
   	</tr>
	)
}

