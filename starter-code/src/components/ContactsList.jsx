import React from 'react';

const ContactsList = (props) => {
	return (
		<div className="table-container">
			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{props.contacts.map((contact, index) => {
							const { name, pictureUrl, popularity } = contact;
							return (
								<tr key={index}>
									<td>
										<img src={pictureUrl} height='100px' alt="" />
									</td>
									<td>{name}</td>
									<td>{popularity.toFixed(2)} </td>
									<td>
										<button onClick={() => { props.deleteContact(index)}}>Delete</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default ContactsList;
