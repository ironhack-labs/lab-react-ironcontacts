import picWon from '../../../../public/img/won.svg';
import starWon from '../../../../public/img/starWon.svg';

function ContactItem({ contact, onDelete }) {

  const handleDelete = () => onDelete(contact);

  return (
    <tr>
      <td >
        <img src={contact.pictureUrl} alt="picture's contact" className="pic-contacts" />
      </td>
      <td>
        {contact.name}
      </td>
      <td>
        {contact.popularity.toFixed(2)}
      </td>
      <td>
        {contact.wonOscar &&
          <img className="pic-won" src={picWon} alt="pic"/>
        }
      </td>
      <td>
      {contact.wonEmmy &&
          <img className="pic-won" src={starWon} alt="pic"/>
        }
      </td>
      <td>
        <button className="btn btn-secondary my-3" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  )
}

ContactItem.defaultProps = {
  contacts: [],
  onDelete: () => {}
}

export default ContactItem;