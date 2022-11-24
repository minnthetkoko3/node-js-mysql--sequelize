import 'dotenv/config';
import database from './configs/database.config.js';
import {} from './controllers/products.controller.js';

database
  .sync()
  .then(_ => {
    console.log('Connect mysql database success.');
  })
  .catch(error => {
    console.log(error);
  });
