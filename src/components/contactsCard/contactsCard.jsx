import './contactsCard.css'

const ContactsCard = ({ id, pictureUrl, name, popularity, wonOscar, wonEmmy }) => {

    return (
        <table>
            <tbody>
                <tr>
                    <td><img src={pictureUrl} alt="picture" /></td>
                    <td>{name}</td>
                    <td>{popularity}</td>
                    <td>{wonOscar ? <p>Sí tuvo Oscar ★</p> : <p>No tuvo Oscar 💩</p>}</td>
                    <td>{wonEmmy ? <p>Sí tuvo Emmy ★</p> : <p>No tuvo Emmy 💩</p>}</td>
                </tr>
            </tbody>
        </table >
    );
}

export default ContactsCard