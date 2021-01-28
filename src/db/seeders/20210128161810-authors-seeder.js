'use strict';

const faker = require('faker')
faker.locale = "id_ID";

const authors = [...Array(10)].map((author, index) => {
  return {
    id: index +1,
    first_name : faker.name.findName(),
    last_name : faker.name.findName(),
    email : faker.internet.email(),
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
   await queryInterface.bulkInsert("Authors", authors);
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
