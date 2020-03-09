import React from 'react';
import { ItemRow, ImageContainer } from '../styles/ListItem';

export const Celebrity = ({ picture, name, popularity }) => {
	return (
		<ItemRow>
			<ImageContainer>
				<img src={picture} />
			</ImageContainer>
			<p>{name}</p>
			<p>{Number.parseFloat(popularity).toFixed(2)}</p>
		</ItemRow>
	);
};
