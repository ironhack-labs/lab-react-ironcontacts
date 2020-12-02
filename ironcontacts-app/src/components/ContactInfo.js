import './ContactInfo.css'

const ContactInfo = ({ picture, name, popularity, deleteContact }) => {


    return (

    <tr className="contact-info">
        <td><img src={picture}></img></td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><button onClick={deleteContact}>Delete</button></td>
    </tr>

    )
}

export default ContactInfo