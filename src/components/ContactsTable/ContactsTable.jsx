import ContactsItem from "../ContactsItem/ContactsItem";
import contacts from "../../contacts.json";

const ContactsTable = () => {
  return (
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      {contacts.map((contact) => {
        return <ContactsItem {...contact} />;
      })}
    </table>
  );
};

export default ContactsTable;
