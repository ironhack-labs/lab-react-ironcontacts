imports contactsData from './contacts.json';
imports contactCards from './contactsCard';

const first5Contacts = contactsData. splice(0, 5);

function ContactList(){
    const [contacts, setContacts] = useState(first5Contacts);

    function addContact(){
        const randomContact = contactData [(Math.floor(Math.random() * (contactsData.length -1)))];

        const newContactArray = [...contacts, randomContact];
        setContacts(newContactArray);
    }

    function sortContactsName(){
        let newContactsArray = [...contacts];
        newContactsArray.sort((a, b) =>{
            if(a.name < b.name) {return -1};
            if(a.name > b.name) {return 1};
            return 0;
        })
        setContacts(newContactsArray);
    }

    function sortContactsPopularity(){
        let filteredContactsArray = [...contacts];
        filteredContactsArray.sort((a, b) =>{
            return b.popularity - a.popularity
        })
        setContacts(filteredContactsArray);
    }

    function deleteContact(contactId){
        const updateContactsArray = contacts.filter(contact => contact.id !== contactsId);
        setContacts(updateContactsArray);
    }

    return(
        <div className="List">
            <h2> Contact List </h2>
            <button className='btn-add' onClick={() => addContact()}
            >Add New Contact</button>
            <button className='btn-add' onClick={() => sortContactsName()}
            >Sort by name</button>
            <button className='btn-add' onClick={() => sortContactsPopularity()}
            > Sort by Popularity </button>
                    <table>
                        <thead>
                            <tr>
                                <th> Picture </th>
                                <th> Name </th>
                                <th> Popularity </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacs.map((contacts, id) =>{
                                return (
                                    <ContactsCard key={id} contacts={contact} handleDelete={deleteContact}/>
                                )
                            })}
                        </tbody>
                    </table>
                    </div>
    )
}