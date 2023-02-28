import './ContactCard.css'


const ContactCard = ({ name, pictureUrl, popularity, wonOscar, wonEmmy, id }) => {



    return (

        <article className="ContactCard">
            <img src={pictureUrl} alt={name} />
            <div>
                <br />
                <p>{name}</p>
                <p>{popularity}</p>
                <p>{wonOscar && 'Gano un Oscar 🏆'}</p>
                <p>{wonEmmy && 'Gano un Emmy 🏆'}</p>
            </div>

        </article>

    )
}

export default ContactCard