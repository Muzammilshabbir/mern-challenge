const { Seeder } = require('mongoose-data-seed');
const User = require('../models/user.model')

const data = [{
  name: 'demo',
  email: 'demo@demo.com',
  password: 'demo123',
}];

class UsersSeeder extends Seeder {

  async shouldRun() {
    return User.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return await User.create(data);
  }
}

module.exports = UsersSeeder;
