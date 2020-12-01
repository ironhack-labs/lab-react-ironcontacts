

const ContactCard = ({ pictureUrl, name, popularity, id, removeContact }) => {

    return (
        <tr key={id}>
            <td>
                <img src={pictureUrl} alt={name}></img>
            </td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td>
                <button style={{ background: "red" }} onClick={removeContact} >Delete</button>
            </td>
        </tr>
    )
}

export default ContactCard