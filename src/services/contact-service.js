import contacts from '../contacts.json';

export const getContactCountFive = () => {
    return contacts.slice(0, 5);
};

export const getContactRandom = (arrContact) => {

    const addedContactIds = arrContact.map(contact => contact.id);
    
    const data = contacts.filter(item => !addedContactIds.includes(item.id));
    
    if (data.length === 0) {
        return null;
    }

    const randomContact = Math.floor(Math.random() * data.length);

    return data[randomContact];
};

export const getContactSortName = (arrContact) => {
    return arrContact.sort((a, b) => a.name.localeCompare(b.name));
};

export const getContactSortPopularity = (arrContact) => {
    return arrContact.sort((a, b) => b.popularity - a.popularity);
};

export const setContactDelete = (arrContact, id) => {
    return arrContact.filter(contc => !contc.id.includes(id));
};