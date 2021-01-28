'use strict';

const faker = require('faker')
faker.locale = "id_ID";

const books = [...Array(10)].map((book, index) => {
  return {
    id: index +1,
    author_id : Math.round(Math.random() + 1),
    publisher_id : Math.round(Math.random() + 1),
    title : faker.random.words(4),
    price : faker.finance.amount(1, 100, 2, 'Rp'),
    year : faker.date.past(),
    created_at : faker.date.recent(),
    updated_at : faker.date.recent()
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
   await queryInterface.bulkInsert("Books", books);
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
