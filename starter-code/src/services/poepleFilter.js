import contacts from '../contacts.json'

export function filterContacts(){

    let people = contacts.slice(0,5)
    return people
}