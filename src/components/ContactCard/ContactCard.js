import Button from "../Button/Button";

const ContactCard = ({ pictureUrl, name, popularity, wonOscar, wonEmmy, buttonAction }) => {
	return (
		<div className="card mb-3 rounded" style={{ width: "400px" }}>
			<div className="row no-gutters">
				<div className="col-sm-5">
					<img className="card-img" src={pictureUrl} alt="Suresh Dasari Card" />
				</div>
				<div className="col-sm-7 position-relative">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">Popularity {popularity.toFixed(2)}</p>
						{wonOscar && <p className="card-text">Won Oscar 🏆</p>}
						{wonEmmy && <p className="card-text">Won Emmy 🏆 </p>}
						<Button action={buttonAction} className="btn btn-danger position-absolute bottom-0 my-2">
							Delete
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
