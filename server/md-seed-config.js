const mongoose = require('mongoose');
const Users = require('./seeders/users.seeder')

const mongoURL = process.env.DBURI || 'mongodb://localhost:27017/mern-challenge';

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
exports.seedersList = {
  Users
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
exports.connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
exports.dropdb = async () => mongoose.connection.db.dropDatabase();
