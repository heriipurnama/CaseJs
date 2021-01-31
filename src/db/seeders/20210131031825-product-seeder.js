'use strict';

const faker = require('faker')
faker.locale = "id_ID";

const products = [...Array(10)].map((product, index) => {
  return {
    name : faker.commerce.productName(),
    price : faker.finance.amount(1, 100, 2, 'Rp'),
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
   await queryInterface.bulkInsert("products", products);
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
