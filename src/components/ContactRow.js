


const ContactRow = (contact) => {

  return (

    <tbody>

      <tr key={contact.id} >
        <td>
          <img style={{ height: '12vh' }} src={contact.pictureUrl} alt={contact.name} />
        </td>
        <td>
          {contact.name}
        </td>
        <td>
          {contact.popularity.toFixed(2)}
        </td>
        <td>
          {contact.wonOscar ? '\u{1F3C6}' : <span></span>}
        </td>
        {contact.wonEmmy ? '\u{1F3C6}' : <span></span>}
        <td>
          <button onClick={() => { contact.deleted(contact.id) }}>Delete</button>
        </td>
      </tr>
    </tbody>
  )
}

export default ContactRow