'use strict';


import React from "react";

/**
 * Created by David on 17/08/2019.
 */

class ListaContacts extends React.Component {


	render() {

		const listaItems = this.props.lista.map((c, index) => {
			return <tr>
				<td>{index + 1}</td>
				<td>a</td>
				<td>b</td>
			</tr>
		});

		return <div>
			<table className="table table-condensed table-striped">
				<thead>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Popularity</th>
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
