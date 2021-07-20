import "./ContactCard.css"


const ContactCard = ({pictureUrl, name, popularity, id, deleteContact}) => {
    return(
        <tr>
            <td><img className="contact-image" src={pictureUrl}/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <button onClick={()=>{deleteContact(id)}}>Delete</button>
        </tr>    
    )
}

export default ContactCard