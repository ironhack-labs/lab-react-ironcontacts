import React from 'react';

const Button = ({name, handleClick}) => (
	<button
		name={name}
		onClick={handleClick}>{
				name === 'addContact' ? 'Add Random Contact' :
				name === 'sortByName' ? 'Sort by Name' :
				name === 'sortByPopularity' ? 'Sort by Popularity': 'Delete'
			}
			</button>
)

export default Button;