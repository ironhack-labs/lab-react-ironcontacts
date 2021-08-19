const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EMAIL_PATTERN = /\S+@\S+\.\S+/;

const contactSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  phone: String,
  email: {
    type: String,
    match: [EMAIL_PATTERN, 'Email is not valid'],
    lowercase: true
  },
  avatar: {
    type: String,
    default: 'https://cdn.icon-icons.com/icons2/1378/PNG/128/avatardefault_92824.png'
  }
}, { 
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret.__v;
      delete ret._id;
      return ret;
    }
  }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
