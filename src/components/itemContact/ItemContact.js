import './ItemContact.css'

function ItemContact({ name, pictureUrl, popularity, id, onClickDelete}) {
    return (
        <tr>
            <td><img src={pictureUrl} alt={name}></img></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><i className="fa fa-times text-danger" role="button" onClick={() => onClickDelete(id)}></i></td>
        </tr>
    )
}
ItemContact.defaultProps = {
    onClickDelete: () => {}
}

export default ItemContact