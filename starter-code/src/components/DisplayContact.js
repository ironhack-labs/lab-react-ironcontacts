import React from 'react';

function display(props) {
	return (
		<tr className="tableRow">
			<td><img className="contactImage" src={props.pictureUrl} alt="icon" /></td>
			<td>{props.name}</td>
			<td>{props.popularity}</td>
			<td><button onClick={() => props.onclick(props.index)} >Delete</button> </td>
		</tr>
	)
}

export default display