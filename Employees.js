`use strict`
const fetch = require('node-fetch');

const urlAPI = 'https://mul14.github.io/data/employees.json';

async function getData(){
    const restPosts = await fetch(`${urlAPI}`);
    let responses = await restPosts.json();

    // find salary 15000000 --> undifined
    const salary = 15000000;
    let resultSalary = responses.find((item) => {
        return resultSearchSalary = item.salary === salary ?  true : false;
    });

    console.log('resultSalary', resultSalary);

    // find salary DKI Jakarta --> undifined
    const city = "DKI Jakarta";
    let resultCity = responses.filter((item) => {
        return resultSearchSalary = item.addresses[0].city === city ?  true : false;
    });

    console.log('resultCity', resultCity);

    // find department Research and development --> undifined
    const dept = "Research and development";
    let resultDept = responses.filter((item) => {
        return resultSearchSalary = item.department.name === dept ?  true : false;
    });

    console.log('resultDept', resultDept);
 }

 getData();
