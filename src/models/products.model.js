import Sequelize from 'sequelize';

import sequelize from '../configs/database.config.js';

// ✔ create product model using sequelize
const ProductsModel = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: { type: Sequelize.DOUBLE, allowNull: false },
  imageUrl: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
});

export default ProductsModel;
