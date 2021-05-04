import './ContactCard.css'

const ContactCard = ({ deleteOneContact, pictureUrl, name, popularity }) => {
    return (
        <tr className="contact-card">
            <td>
                <img src={pictureUrl} alt={name}></img>
            </td>
            <td>
                <h3>{name}</h3>
            </td>
            <td>
               <h3>{popularity}</h3> 
            </td>
            <td>
                <button onClick={deleteOneContact}>Delete {name} contact</button>
            </td>
        </tr>
    )
}

export default ContactCard