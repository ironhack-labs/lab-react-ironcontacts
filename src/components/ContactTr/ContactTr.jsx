import ContactPicture from "../ContactPicture/ContactPicture"

const ContactTr = ({ name, pictureUrl, popularity, id, wonOscar, wonEmmy }) => {

    const popularityParsed = Math.round(popularity * 100) / 100

    return (
        <tr>
            <td><ContactPicture picture={pictureUrl} name={name} /></td>
            <td>{name}</td>
            <td>{popularityParsed}</td>
            <td>{wonOscar && '🏆'}</td>
            <td>{wonEmmy && '🏆'}</td>
        </tr>
    )
}

export default ContactTr