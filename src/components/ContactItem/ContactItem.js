
import React from "react"




function ContactItem({pictureUrl, name, popularity, onClickDelete, id}) {
    return (
        <tr>
            <td><img src={pictureUrl} alt={name} style={{maxWidth:"70px"}} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><i className="fa fa-times text-danger" role="button" onClick={() => onClickDelete(id)} /></td>
        </tr>
    )
}

ContactItem.defaultProps = {
    onClickDelete: () => {}
}
export default ContactItem