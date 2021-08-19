const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/react-contacts';

mongoose.connect(MONGODB_URI, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
  .catch(error => {
    console.error('An error occurred trying to connect to the database', error);
    process.exit(1);
  })

process.on('SIGINT', () => {
  mongoose.disconnect()
    .then(() => {
      console.info('Successfully disconected mongodb');
      process.exit(0);
    })
    .catch(error => {
      console.error('An error ocurred trying to disconect mongoose', error);
      process.exit(1);
    });
  
})
