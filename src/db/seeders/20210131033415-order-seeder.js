'use strict';
const faker = require('faker')
faker.locale = "id_ID";

const orders = [...Array(10)].map((orders, index) => {
  return {
    customer_id : faker.random.number({ 'min': 1, 'max': 10 }),
    status : faker.lorem.word("accept"),
    driver_id : faker.random.number({ 'min': 1, 'max': 10 }),
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
   await queryInterface.bulkInsert("orders", orders);
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
