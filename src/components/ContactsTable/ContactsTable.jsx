import ContactsItem from "../ContactsItem/ContactsItem";
import "./ContactsTable.css";
import contacts from "../../contacts.json";

const ContactsTable = () => {
  return (
    <table className="ContactsTable">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return <ContactsItem {...contact} key={contact.id} />;
        })}
      </tbody>
    </table>
  );
};

export default ContactsTable;
