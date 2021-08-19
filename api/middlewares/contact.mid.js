const createError = require('http-errors');
const Contact = require('../models/contact.model');

module.exports.exists = (req, res, next) => {
  const id = req.params.contactId || req.params.id;
  Contact.findById(id)
    .then(contact => {
      if (contact) {
        req.contact = contact;
        next();
      } else {
        next(createError(404, 'Contact not found'));
      }
    })
    .catch(error => next(error));
}
