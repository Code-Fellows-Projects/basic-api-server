'use strict';

const express = require('express');
const app = express();

///////////////middleware//////////////////
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const clothesRoutes = require('./routes/clothes');
const foodRoute = require('./routes/food');
////middleware
app.use(express.json());
app.use(logger);
app.use(clothesRoutes);
app.use(foodRoute);

app.get('/tester', testerCallBackHandler);

function testerCallBackHandler(req, res, next) {
  res.status(200).send('The world is alive!');
}





app.use('*', notFoundHandler);
app.use(serverError);



module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('cannot find port'); }
    app.listen(port, () => {
      console.log(`server up on ${port}`);
    });
  },
};
