// model/index.js
import Sequelize from 'sequelize';
import userModel from './user';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'postgres',
	operatorAliases: false,
	ssl: true,
	dialectOptions: {
		ssl: { requre: true, rejectUnauthorized: false },
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//...

db.users = userModel(sequelize, Sequelize);

export default db;
