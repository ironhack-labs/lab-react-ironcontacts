const Contact = require('../models/contact.model');

module.exports.list = (req, res, next) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(error => next(error));
}

module.exports.detail = (req, res, next) => {
  res.json(req.contact);
}

module.exports.delete = (req, res, next) => {
  Contact.deleteOne({ _id: req.contact.id })
    .then(() => res.status(204).send())
    .catch(error => next(error))
}

module.exports.create = (req, res, next) => {
  Contact.create(req.body)
    .then(contact => res.status(201).json(contact))
    .catch(error => next(error))
}

module.exports.edit = (req, res, next) => {
  const data = { name, email, phone, avatar } = req.body;
  const contact = req.contact;
  Object.assign(contact, data);
  contact.save()
    .then(contact => res.json(contact))
    .catch(error => next(error))
}
