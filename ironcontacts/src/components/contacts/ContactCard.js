import './ContactCard.css'



const ContactCard = ({ name, pictureUrl, deleteCelebrity, popularity }) => {

    return (
        <tr>
            <td><img src={pictureUrl} alt={name}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={deleteCelebrity}>Delete celebrity</button></td>
        </tr>
    )

}

export default ContactCard
