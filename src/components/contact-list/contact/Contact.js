
function Contact(props) {

    const { contact, deleteContact } = props;

    return (
        <tr>
            <td><img className="img-responsive" style={{ 'max-width' : '200px' }} src={ contact.pictureUrl } alt={ contact.pictureUrl } /></td>
            <td>{ contact.name }</td>
            <td>{ contact.popularity }</td>
            <td> <button className="btn btn-dark" onClick={() => deleteContact(contact.id)} ><i className="fa fa-trash"></i></button></td>
        </tr>
    );
  }
  
export default Contact
  