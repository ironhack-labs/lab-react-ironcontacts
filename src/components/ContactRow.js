import './ContactRow.css'

const ContactRow = ({ picture, firstName, popularity, deleteContact }) => {

    return (
        <>
            <tr className="contact-card">
            <td><button onClick={deleteContact} class='btn-sm btn btn-danger'>Delete</button></td>
                <td class="table-info"><img src={picture} alt='Contact Photo' /></td>
                <td class="table-ligth"><p>{firstName}</p></td>
                <td class="table-info"><p className="popularity">{popularity}</p></td>
            </tr>
        </>
    )
}

export default ContactRow