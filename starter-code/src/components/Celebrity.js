import React from 'react';
import { ItemRow, ImageContainer } from '../styles/ListItem';

export const Celebrity = props => {
	return (
		<ItemRow>
			<ImageContainer>
				<img src={props.picture} />
			</ImageContainer>
			<p>{props.name}</p>
			<p>{Number.parseFloat(props.popularity).toFixed(2)}</p>
		</ItemRow>
	);
};
