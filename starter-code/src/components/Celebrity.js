import React from 'react';
import { CelebrityRow, ImageContainer, Position } from '../styles/Table';
import { DeleteButton } from '../styles/Button';

export const Celebrity = ({ index, isSorted, picture, name, popularity, id, removeContact }) => {
	return (
		<CelebrityRow>
			{isSorted ? <Position>{index + 1}</Position> : <p />}
			<ImageContainer>
				<img src={picture} />
			</ImageContainer>
			<p>{name}</p>
			<p>{Number.parseFloat(popularity).toFixed(2)}</p>
			<DeleteButton onClick={() => removeContact(id)} className="fas fa-trash" />
		</CelebrityRow>
	);
};
