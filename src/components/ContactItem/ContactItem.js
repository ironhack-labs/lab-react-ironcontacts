const ContactItem = ({name, pictureUrl, popularity, id, deleteContact}) => {

    return (

        <tr>
            <td><img src={pictureUrl} alt="" /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button className='deleteButton' onClick={() => deleteContact(id)}>Delete</button></td>
        </tr>

    )
}

export default ContactItem