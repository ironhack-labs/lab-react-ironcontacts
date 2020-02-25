import contacts from '../contacts.json'

export const initialList = contacts.filter((elm, idx) => idx <= 4)
export const filteredList = contacts.filter((elm, idx) => idx >= 5)
