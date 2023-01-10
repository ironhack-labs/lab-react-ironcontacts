import allContacts from "../../src/contacts.json";
import ContactCard from "./ContactCard";

const newAllContacts = [...allContacts];

const firstFiveContacts = newAllContacts.slice(0, 5);

function MainSection() {
  return (
    <div className="main">
      <div className="contacts-container">
        {firstFiveContacts.map((contact) => {
          return (
            <ContactCard
              name={contact.name}
              pictureUrl={contact.pictureUrl}
              popularity={contact.popularity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainSection;
