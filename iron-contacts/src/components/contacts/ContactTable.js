import './ContactTable.css'

const ContactTable = ({ name, pictureUrl, deleteContact, popularity }) => {
    
    return (

        <>
            <tbody className="table">
                <tr>
                    <td><img className="img-contact" src={pictureUrl} alt="img-contact" /></td>
                    <td>{name}</td>
                    <td>{popularity}</td>
                    <td><button className="btn" onClick={deleteContact}>Delete</button></td>
                </tr>
            </tbody>
        </>

    )

}

export default ContactTable