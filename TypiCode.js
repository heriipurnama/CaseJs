`use strict`
const axios = require('axios');

const urlAPI = 'https://jsonplaceholder.typicode.com';

async function getData(){
    const resPosts = await axios(`${urlAPI}/posts`);
    const resUsers = await axios(`${urlAPI}/users`);
  

    // console.log("post", resPosts.data);
    // console.log("user", resUsers.data);
    const a1 = resPosts.data;
    const a2 = resUsers.data;

    console.log('data', a1);
 }

 getData();
