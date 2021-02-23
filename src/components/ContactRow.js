import './ContactRow.css'

const ContactRow = ({ name, pictureUrl, popularity, deleteContact }) => {
    return (
        <tr>
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button onClick={deleteContact}>Delete Contact</button></td>
        </tr>
    )
}

export default ContactRow