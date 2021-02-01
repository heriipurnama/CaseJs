'use strict';

const faker = require('faker')
faker.locale = "id_ID";

const books = [...Array(10)].map((book, index) => {
  return {
    author_id : faker.random.number({ 'min': 1, 'max': 10 }),
    publisher_id : faker.random.number({ 'min': 1, 'max': 10 }),
    title : faker.random.words(4),
    price : faker.finance.amount(1, 100, 2, 'Rp'),
    year : faker.date.past(),
    cover_book: faker.image.fashion(),
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
   await queryInterface.bulkInsert("books", books);
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
