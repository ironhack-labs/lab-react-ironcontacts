import ContactCard from '../ContactCard/ContactCard'


const ContactsList = ({ contacts, addContact }) => {
    return (
        <>

            <button onClick={addContact}>Add Contact</button>
            {
                contacts.map(elm => {

                    return <ContactCard key={elm.id} {...elm} />

                })
            }
        </>

    )

}

export default ContactsList