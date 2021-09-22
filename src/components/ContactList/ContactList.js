import './ContactList.css'

const ContactList = ({ pictureUrl, name, popularity, deleteContact, id }) => {

    const popularityFix = popularity.toFixed(2)

    return (
        <tr className="card">
            <td><img className="image-card" src={pictureUrl} alt="image" /></td>
            <td className="name-card">{name}</td>
            <td className="popularity-card">{popularityFix}</td>
            <button className="button-card" onClick={() => deleteContact(id)}>Delete</button>
        </tr>
    )
}

export default ContactList