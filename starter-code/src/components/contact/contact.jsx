import React from 'react';
import './contact.scss';

export const Contact = (props) => {

	const clickHandler = () => {
		props.deleteContact(props.contact);
	};

	return (
		<tr className={'contact'}>
			<td><img src={props.contact.pictureUrl} alt={'contactImage'}/></td>
			<td>{props.contact.name}</td>
			<td>{props.contact.popularity.toFixed(2)}</td>
			<td><button onClick={clickHandler}>Delete</button></td>
		</tr>
	)
} ;