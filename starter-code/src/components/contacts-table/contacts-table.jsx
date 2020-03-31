import React from 'react';
import './contacts-table.scss'
import { Contact } from '../contact/contact';

export const ContactsTable = (props) => {
	return (
		<table>
			<tr>
				<th>Picture</th>
				<th>Name</th>
				<th>Popularity</th>
				<th>Action</th>
			</tr>
			{props.contacts.map((contact) =>
				<Contact key={contact.id} contact={contact} deleteContact={props.deleteContact}/>
			)}

		</table>
	)
};