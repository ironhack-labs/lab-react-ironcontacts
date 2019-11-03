import contacts from '../contacts.json'

let initial_conditions = contacts.slice(0, 5);
export let rest_contacts = contacts.slice(5, contacts.length)

export default initial_conditions



