/** @format */

import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
	let firstFive = contactsData.slice(0, 5);
	const [contacts, setContacts] = useState(firstFive);

	return (
		<div className="App">
			<h1>IronContacts</h1>

			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won Oscar</th>
						<th>Won Emmy</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((e) => {
						return (
							<tr className="details-tr">
								<td>
									<img src={e.pictureUrl} />
								</td>
								<td>{e.name}</td>
								<td>{e.popularity.toFixed(2)}</td>
								{e.wonOscar ? (
									<td>
										<p>🏆</p>
									</td>
								) : (
									<td></td>
								)}
								{e.wonEmmy ? (
									<td>
										<p>🏆</p>
									</td>
								) : (
									<td></td>
								)}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
