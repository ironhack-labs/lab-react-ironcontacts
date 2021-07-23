

function ContactItem ({pictureUrl, name, popularity, id, onClikDelete}) {

    return(
       <tr key={id}>
           <td><img src={pictureUrl} alt={name} className="avatar align-self-start img-fluid w-100 rounded-circle me-3" /></td>
           <td><h5>{name}</h5></td>
           <td>{popularity}</td>
           <td> <i className="fa fa-times text-danger" role="button" onClick={() => onClikDelete(id)}></i></td>
       </tr>
    )
}


export default ContactItem