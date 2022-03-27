import Section from "../Section/Section";
import ContactCard from "../ContactCard/ContactCard";

const ContactsGroup = ({ className, data, buttonAction}) => {

  return (
		<Section className={className}>
			{data.map((contact) => (
        <ContactCard key={contact.id} {...contact} buttonAction={ () => buttonAction(contact.id)}/>
			))}
		</Section>
	);
};

export default ContactsGroup;
