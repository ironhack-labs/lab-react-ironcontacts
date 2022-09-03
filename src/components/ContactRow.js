


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
          {contact.wonOscar ? 'trofeu' : 'sem trofeu'}
        </td>
        {contact.wonEmmy ? 'trofeu' : 'sem trofeu'}
        <td>
          <button onClick={() => { contact.deleted(contact.id) }}>Delete</button>
        </td>
      </tr>
    </tbody>
  )
}

export default ContactRow