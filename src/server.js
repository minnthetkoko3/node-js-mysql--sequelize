import 'dotenv/config';
import database from './configs/database.config.js';
import productController from './controllers/products.controller.js';

database
  .sync()
  .then(_ => {
    console.log('Connect mysql database success.');

    // ✔ save product data
    /*
    productController
      .create({
        title: 'Some title',
        price: 52.5,
        imageUrl: 'https://localhost/images/some-image.jpg',
        description: 'Some description',
      })
      .then(data => console.log(data))
      .catch(error => console.log(error));
    */

    // ✔ find products data
    /*
    productController
      .findAll()
      .then(data => console.log(data))
      .catch(error => console.log(error));
    */

    // ✔ find product data by condition
    /*
    productController
      .findAll({ where: { id: 1 } })
      .then(data => console.log(data))
      .catch(error => console.log(error));
    */

    // ✔ find product data by id
    /*
    productController
      .findById(1)
      .then(data => console.log(data))
      .catch(error => console.log(error));
    */

    // ✔ find product and update by id
    // productController
    //   .findAndUpdate(1, { title: 'Hello' })
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error));

    // ✔ delete product by id
    /* 
    productController
      .delete(3)
      .then(result => console.log(result))
      .catch(error => console.log(error));
    */
  })
  .catch(error => {
    console.log(error);
  });
