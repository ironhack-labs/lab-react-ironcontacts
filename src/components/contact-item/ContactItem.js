import './ContactItem.css'

function ContactItem ({id,pictureUrl,name,popularity,onClickDelete}) {
    return(
        <tr className="ContactItem">
            <th scope="row"><img src={pictureUrl} alt={name} className="rounded w-10"/></th>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td className="fa fa text-danger" id="delete" role="button" onClick={() => onClickDelete(id)} >Delete</td>
        </tr>
    )
}

ContactItem.defaultProps = {
    onClickDelete: () => {}
}

export default ContactItem;