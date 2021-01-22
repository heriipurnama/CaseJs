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

    const mapToUser = (post, users) => {
        const user = users.find((e) => e.id === post.userId);
        post.user = user;
    };

    const getAll = async () => {
        let post = await resPosts;
        let user = await resUsers;
        post = post.map((e) => mapToUser(e, user));

    }
}
 
 
getData();
