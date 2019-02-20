import React, { Component } from 'react';
import './ContactTable.css';
import FunctionButton from './FunctionButton/FunctionButton';

export default class ContactTable extends Component {
	render() {
		console.log(this.props.contactsProp);
		// aqui puedo declarar variables
		//pero si estamos dentro del return debemos poner {}
		return (
			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.contactsProp.map((element, idx) => {
						return (
							<tr key={idx}>
								<td>{<img className="profileimg" src={element.pictureUrl} />}</td>
								<td>{element.name}</td>
								<td>{element.popularity.toFixed(2)}</td>
								<td>
									<FunctionButton functionProp={() => this.props.deleteProp(element.name)}>
										Delete
									</FunctionButton>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}
