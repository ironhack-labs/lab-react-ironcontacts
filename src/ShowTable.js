const ShowTable = (props) => {
	let list = props.actors.map((actor) => {
		return (
			<tr>
				<td>
					<img src={actor.pictureUrl} height="50px" />
				</td>
				<td>{actor.name}</td>
				<td>{actor.popularity}</td>
				<td>
					<button onClick={props.deleteActor}>Delete</button>
				</td>
			</tr>
		);
	});
	return list;
};

export default ShowTable;
