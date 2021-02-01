"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const { routerAuthors, routerPublishers, routerBooks }= require("./src/router");

// router
// app.use("/authors", routerAuthors);
// app.use("/publishers", routerPublishers);
// app.use("/books", routerBooks);

const routers = require("./src/router")

app.use("/api/v1", routers)

// 
app.use((req, res) => {
    res.status(404).json({
        "message" : "resource not found"
    })
})

// middleware handling 404
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
