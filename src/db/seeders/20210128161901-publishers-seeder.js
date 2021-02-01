'use strict';

const faker = require('faker')
faker.locale = "id_ID";


const publisers = [...Array(10)].map((publiser, index) => {
  return {
    name : faker.company.companyName(),
    address : faker.address.streetName(),
    email : faker.internet.email(),
    phone : faker.random.number(),
    website: faker.internet.domainName(),
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
  await queryInterface.bulkInsert("publishers", publisers);
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
