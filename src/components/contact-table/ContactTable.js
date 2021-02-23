import './ContactTable.css'

const ContactTable = ({ pictureUrl, name, popularity}) => {

    return (
        <table className="contacts-table">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={pictureUrl} alt={name} /></td>
                    <td>{name}</td>
                    <td>{popularity}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ContactTable