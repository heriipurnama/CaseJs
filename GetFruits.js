`use strict`

const axios = require("axios");
const where = require("lodash.where");

const API = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";

const getPost = () =>
  axios
    .get(`${API}`)
    .then((response) => response.data)
    .catch((error) => console.log({ user: error }));

const getAll = async () => {
    let posts = await getPost();

    let filtered = where(posts, { "category" : "fruits" });
    
    console.log('filtered',filtered);

    return filtered;
};

// call
getAll();
