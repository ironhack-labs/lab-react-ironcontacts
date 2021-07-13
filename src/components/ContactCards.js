import './ContactCard.css'


let ContactCards = ({ name, pictureUrl, popularity, deleteContacts }) => {
//    le pasamos deleteCard (función) como otra key más.
    return (
        <>
            <div className="container contactCard">

                <div className="row">

                    <div className="col-3">
                        <img src={pictureUrl} alt="contactphoto"></img>
                    </div>
                    <div className="col-3 cardText d-flex align-items-center">
                       {name}
                    </div>
                    <div className="col-3 cardText d-flex align-items-center">
                       {popularity}
                    </div>
                    <div className="col-3 cardText d-flex align-items-center">
                        <button onClick={deleteContacts} style={{ width: '100%', margin: '30px 0' }} >
                            {/* //le pasamos onClick la función como dato, para así poder accionarse desde el botón que tenemos aquí. Con la lógica que tenemos en el componente padre.
                            */}See ya {name}!
                        </button>
                    </div>

                </div>

            </div>


        </>
    )
}

export default ContactCards
