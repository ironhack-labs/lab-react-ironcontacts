
function Contact(props) {

    const { contact } = props;

    return (
        <tr>
            <td><img src={ contact.pictureUrl } alt={ contact.pictureUrl } /></td>
            <td>{ contact.name }</td>
            <td>{ contact.popularity }</td>
        </tr>
    );
  }
  
export default Contact
  