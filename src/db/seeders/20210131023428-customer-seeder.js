'use strict';

const faker = require('faker')
faker.locale = "id_ID";

const customers = [...Array(10)].map((customer, index) => {
  return {
    full_name : faker.name.findName(),
    username : faker.name.findName(),
    email : faker.internet.email(),
    phone_number : faker.phone.phoneNumber(),
    created_at: faker.date.recent(),
    updated_at: faker.date.recent()
  }
})


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("customers", customers);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
