
const displayOne = ({ pictureUrl, name, id, deleteContact, popularity }) => {
    return (
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="contact-image" src={pictureUrl} alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {name}</h5>
                            <p className="card-text">Popularidad: {popularity.toFixed(2)}</p>
                            <button className="btn btn-outline-danger" onClick={() => deleteContact(id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default displayOne