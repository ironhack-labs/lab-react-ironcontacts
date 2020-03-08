import React from 'react';
import { ListItem } from '../styles/ListItem';

export const Celebrity = props => {
	return (
		<ListItem>
			<img src={props.picture} />
			<p>{props.name}</p>
			<p>{props.popularity}</p>
		</ListItem>
	);
};
