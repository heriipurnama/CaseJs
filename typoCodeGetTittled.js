`use strict`
const axios = require("axios");
const fs = require('fs')

const API = "https://jsonplaceholder.typicode.com";

const getPost = () =>
  axios
    .get(`${API}/posts`)
    .then((response) => response.data)
    .catch((error) => console.log({ user: error }));

const getAll = async () => {
    let posts = await getPost();

    let resultTilted = posts.filter((item) => {
        console.log("title: ", item.title);
        return item.title;
     });
   
};

// call
getAll();
