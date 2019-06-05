import contacts from './contacts.json';

function allContacts (){
  let arr = [];
  for (var i = 0; i <= contacts.length; i++) {
    arr.push(contacts[i])
  }
  return arr
}

export default allContacts;

