import Button from "../button/Button"


function Contact({ contact, deleteContact }) {
  return (
    <tr>
      <th scope="col"></th>
      <th scope="col" > <img src={contact.pictureUrl} width="60" alt="" />  </th>
      <th scope="col">{contact.name}</th>
      <th scope="col">{contact.popularity}</th>
      <div>
        <Button label="Delete"
          onClick={() => { deleteContact(contact.id) }} ></Button>
      </div>
    </tr>
  )
}
export default Contact
