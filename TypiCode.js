`use strict`
const axios = require("axios");
const fs = require('fs')

const API = "https://jsonplaceholder.typicode.com";

const getPost = () =>
  axios
    .get(`${API}/posts`)
    .then((response) => response.data)
    .catch((error) => console.log({ user: error }));

const getUser = () =>
  axios
    .get(`${API}/users`)
    .then((response) => response.data);

const mapToUser = (post, users) => {
  const user = users.find((e) => e.id === post.userId);
  post.user = user;
  return post;
};

const getAll = async () => {
  let post = await getPost();
  const user = await getUser();
  post = post.map((e) => mapToUser(e, user));

  let data = JSON.stringify(post);
    fs.writeFileSync('DataUser.json', data);
};

// call
getAll();
