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

    // find with filter salary DKI Jakarta 
    const city = "DKI Jakarta";
    let resultCity = responses.filter((item) => {
        return resultSearchCity = item.addresses[0].city === city ?  true : false;
    });

    console.log('resultCity', resultCity);

    // find with filter department Research and development
    const dept = "Research and development";
    let resultDept = responses.filter((item) => {
        return resultSearchDept = item.department.name === dept ?  true : false;
    });

    console.log('resultDept', resultDept);

    // find with filter bithday --> undifined
    const day = "03"; // month march
    let resultBirthday = responses.filter((item) => {
        // split
        let getDate = item.birthday; 
        let fields = getDate.split('-');
        let month = fields[1];
    
        return resultSearchBirthday = month === day ?  true : false;
    });
 
    console.log('resultBirthday', resultBirthday);

    // find with filter abs
    const dates = "2019-10-01";
    let resultAbs = responses.filter((item) => {
        // split
        let getDateAbs = item.presence_list;
    
      return result = getDateAbs.indexOf(dates) !== -1 ? true : false ;
    });

    console.log('resultAbs', resultAbs.length);

 }

 getData();
