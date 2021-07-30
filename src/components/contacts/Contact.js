
function Contact ({ id, pictureUrl, name, popularity, onClickDelete}) {

    return (
        <tr>
            <td><img src={pictureUrl} className="rounded-circle" style= {{ height: "50px"}} alt={name}></img></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button type="button" className="btn btn-danger" onClick={() => onClickDelete(id)}>Delete</button></td>
        </tr>
        
    )
}


Contact.defaultProps = {
    onClickDelete: () => {}
}

export default Contact