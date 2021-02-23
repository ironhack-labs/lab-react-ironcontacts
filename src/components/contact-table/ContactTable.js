import './ContactTable.css'

const ContactTable = ({ pictureUrl, name, popularity}) => {

    return (
            <tbody>
                <tr>
                    <td><img src={pictureUrl} alt={name} /></td>
                    <td>{name}</td>
                    <td>{popularity}</td>
                </tr>
            </tbody>
    )
}

export default ContactTable