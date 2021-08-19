const express = require('express');
const contacts = require('../controllers/contacts.controller');
const contact = require('../middlewares/contact.mid');
const router = express.Router();

router.get('/contacts', contacts.list);
router.post('/contacts', contacts.create);
router.get('/contacts/:id', contact.exists, contacts.detail);
router.delete('/contacts/:id', contact.exists, contacts.delete);
router.put('/contacts/:id', contact.exists, contacts.edit);

module.exports = router;
