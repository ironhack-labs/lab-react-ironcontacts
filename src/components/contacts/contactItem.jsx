function ContactItem({ pictureUrl, name, popularity }) {
 return (
    <tr>
      <th scope="row">#</th>
      <td><img width='50' src={pictureUrl} alt="" /></td>
      <td>{name}</td>
      <td>{popularity}</td>
    </tr>
 )
}

export default ContactItem;