'use strict';

function serverError(error, req, res, next) {
  res.status(500).send('server error', error);
}

module.exports = serverError;