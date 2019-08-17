'use strict';


import React from "react";

/**
 * Created by David on 17/08/2019.
 */

class ListaContacts extends React.Component {

	render() {

		console.log(this.props);

		const listaItems = this.props.lista.map((c, index) => {
			return <tr key={c.id}>
				<td><img alt={c.name} src={c.pictureUrl} className="imgContact" /></td>
				<td>{c.name}</td>
				<td><span className="badge badge-primary">{c.popularity}</span></td>
				<td>
					<button className="btn btn-danger"
									onClick={event=>this.props.onRemoveItem(c.id)}

					><i className="fa fa-trash"></i> Eliminar</button></td>
			</tr>
		});

		return <div>
			<table className="table table-condensed table-striped">
				<thead>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Popularity</th>
					<th></th>
				</tr>
				</thead>
				<tbody>
				{listaItems}
				</tbody>
			</table>

		</div>
	}
}

export default ListaContacts;
