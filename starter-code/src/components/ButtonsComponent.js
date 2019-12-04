import React from 'react';
import { Button } from 'antd';

function ButtonsComponent(props) {
	return (
		<div className='buttons-container'>
			<Button type='primary' size='default' onClick={props.addRandomContact}>
				Add Random Contact
			</Button>
			<Button type='primary' size='default' onClick={props.sortContactsByName}>
				Sort by name
			</Button>
			<Button type='primary' size='default' onClick={props.sortContactsByPopularity}>
				Sort by popularity
			</Button>
		</div>
	);
}

export default ButtonsComponent;
