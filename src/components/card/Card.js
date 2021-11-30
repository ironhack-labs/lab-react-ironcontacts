import './Card.css';

function Card({pictureUrl, name, popularity, deleteContact}){

	if (!name){
		return null;
	}

	return(
		<div className="card-main">

			<div className="card-img" style={{ backgroundImage:`url(${pictureUrl})`}}>
			</div>
			<div>
				<p>{name}</p>
			</div>
			<div>
				<p>{`${popularity}`}</p>
			</div>
			<button onClick={deleteContact}>Delete Contact</button>
		</div>
	);
}

export default Card;