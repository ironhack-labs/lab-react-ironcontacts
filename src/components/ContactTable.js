import ContactList from "./ContactList";

function ContactTable(props) {
  console.log(props.contactArray[0]);
  return (
    <table className="contactsTable">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>
      <tbody>
      <ContactList contacts={[props.contactArray[0]]} />
      </tbody>      
    </table>
  );
}

export default ContactTable;
