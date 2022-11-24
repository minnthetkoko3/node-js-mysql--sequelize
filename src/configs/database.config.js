/* Learn more >> https://sequelize.org/ */
import Sequelize from 'sequelize';

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

// ✔ config mysql database using sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  logging: false,
  dialect: 'mysql',
  host: DB_HOST,
});

export default sequelize;
