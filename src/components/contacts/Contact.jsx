function Contact({contact}) {
    return(
  <tr>
      <th scope="col"></th>
      <th scope="col" > <img src={contact.pictureUrl} width="60" alt=""/>  </th>
      <th scope="col">{contact.name}</th>
      <th scope="col">{contact.popularity}</th>
    </tr>
    )
}
export default Contact
