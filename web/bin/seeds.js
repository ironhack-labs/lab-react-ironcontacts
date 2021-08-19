const faker = require('faker');
const fs = require('fs');

const contacts = [];

for (let i = 0; i < 50; i++) {
  const user = faker.helpers.userCard();
  user.avatar = faker.image.avatar();
  user.id = faker.datatype.uuid();
  contacts.push(user);
}

fs.writeFileSync('src/data/contacts.json', JSON.stringify(contacts));
