import './ContactPicture.css'
const ContactPicture = ({ picture, name }) => {


    return (
        <figure className="ContactPicture">
            <img src={picture} alt={name} />
        </figure>
    )
}

export default ContactPicture