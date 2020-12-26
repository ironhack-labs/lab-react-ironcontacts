const ContactCard = props => {
    return (
        <tr >
            <td><img src={props.pictureUrl} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.popularity.toFixed(2)}</td>
            <td><button onClick={() => props.removeContact(props.id)} className="delete-btn">Delete</button></td>
        </tr>
    )
}

export default ContactCard