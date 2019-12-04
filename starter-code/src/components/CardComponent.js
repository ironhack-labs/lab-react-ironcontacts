import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';

const { Meta } = Card;

function CardComponent(props) {
	return (
		<Card hoverable style={{ width: 240 }} cover={<img alt='' src={props.pictureUrl} />}>
			<Meta title={props.name} description={`Popularity: ${props.popularity.toFixed(2)}`} />
			<Button type='danger' size='default' style={{ top: 15 }} onClick={() => props.removeContact(props.index)}>
				Delete
			</Button>
		</Card>
	);
}

export default CardComponent;
