
const Contact = ({ contact }) => {
    return (
        <div>
            <tr>
                <td>
                    <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🏆' : ''}</td>
            </tr>
        </div>
    );
};

export default Contact;

