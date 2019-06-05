import contacts from './contacts.json';

function firstFive () {
let arr = [];
for (var i = 0; i <= 4; i++) {
  arr.push(contacts[i])
}
return arr
}

export default firstFive;