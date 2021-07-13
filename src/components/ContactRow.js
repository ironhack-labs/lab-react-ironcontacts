import './../contacts.json'

const ContactRow = ({ name, pictureUrl, popularity }) => {

    return (
        <li>
            <img src={pictureUrl}></img>
            {name}
            {popularity}
        </li>
    )
}

export default ContactRow