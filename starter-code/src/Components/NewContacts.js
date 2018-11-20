import React from 'react';
 const NewContacts = ({ newItem }) => (
	<tr>
		<td>
			<img src={newItem.pictureUrl} alt="" />
		</td>
		<td>{newItem.name}</td>
		<td>{newItem.popularity}</td>
	</tr>
);
 export default NewContacts;