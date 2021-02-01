'use strict';

const faker = require('faker')
faker.locale = "id_ID";

const authors = [...Array(10)].map((author, index) => {
  return {
    first_name : faker.name.firstName(),
    last_name : faker.name.lastName(),
    email : faker.internet.email(),
    photo : faker.image.people(),
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
   await queryInterface.bulkInsert("authors", authors);
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
