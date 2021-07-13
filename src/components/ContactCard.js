const Contact = ({ id, pictureUrl, name, popularity }) => {

    return (
        <tr key={id}>
            <td> <img className= "pictureUrl" src={pictureUrl}></img></td>
            <td> {name}</td>
            <td> {popularity}</td>
        </tr>
    )
}

export default Contact