const mongoose = require('mongoose');
const Contact = require('../models/contact.model');
const contacts = require('../data/contacts.json');

require('../config/db.config');

mongoose.connection.once('open', () => {
  mongoose.connection.dropDatabase()
    .then(() => Contact.create(contacts))
    .then(contacts => console.info(`Successfully created ${contacts.length} contacts`))
    .catch(error => console.error('An error ocurred running seeds', error))
    .then(() => mongoose.disconnect())
})
