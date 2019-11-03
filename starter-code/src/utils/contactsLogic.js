import contacts from '../contacts.json'

let initial_conditions = contacts.slice(0, 5);
export let rest_contacts = contacts.slice(6, contacts.length - 1)

export default initial_conditions



