import { Contact } from "./Contact";

export const ContactList = ({ contacts, setContacts }) => {
  // console.log("SHOW:");
  // contacts.forEach((e) => console.log(e.name));
  console.log("contacts for list", contacts);
  return (
    <>
      {contacts.map((e) => (
        <Contact key={e.id} contact={e} contacts={contacts} setContacts={setContacts} />
      ))}
    </>
  );
};
