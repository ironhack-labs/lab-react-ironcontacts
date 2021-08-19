const cors = require('cors');
const createError = require('http-errors');

var allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:3000').split(',')
  .map(origin => origin.trim())

var corsOptions = {
  origin: function (origin, next) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      next(null, true);
    } else {
      next(createError(401, 'Not allowed by CORS'))
    }
  }
}

module.exports = cors(corsOptions);
