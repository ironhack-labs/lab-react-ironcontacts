function Contact({ contact, removeContact }) {
  return (
    <tr>
      <td><img src={contact.pictureUrl} alt={contact.name} /></td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
      <td>{contact.wonOscar ? '🏆' : ''}</td>
      <td>{contact.wonEmmy ? '🌟' : ''}</td>
      <td>
        <button 
        //calls the function received as a prop with the object id value
          onClick={() => removeContact(contact.id)} 
          style={{fontSize: '25px', padding: '10px'}}
        >
          🗑
        </button>
      </td>
    </tr>
  );
}

export default Contact;