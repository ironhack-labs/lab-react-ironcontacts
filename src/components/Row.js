import './Row.css'

const Row = ({ deleteContact, pictureUrl, name, popularity }) => {
    return (
        <tr>
            <td><img src={pictureUrl}></img></td> 
            <td>{name} </td>
            <td>{Math.round(popularity * 100) / 100}</td>
            <td><button className="btn dlt-btn" onClick={deleteContact}>Delete Contact</button></td>
        </tr>
    )
}

export default Row