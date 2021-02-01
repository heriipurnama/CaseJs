"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerAuthors = require("./src/router/routerAuthors");
const routerBooks = require("./src/router/routerBooks");
const routerPublishers = require("./src/router/routerPublishers");

// router
app.use('/authors', routerAuthors)
app.use('/publishers', routerPublishers)
app.use('/books', routerBooks)



// middleware handling 404
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
