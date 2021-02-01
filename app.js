"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routers = require("./src/router")

app.use("/api/v1", routers)


app.use((req, res) => {
    res.status(404).json({
        "message" : "resource not found"
    })
})

// middleware handling 404
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
