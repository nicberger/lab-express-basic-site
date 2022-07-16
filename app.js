const express = require("express");
const app = express();
console.log("ABSOLUTE PATH TO CURRENT FILE", __dirname);
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
});
app.get("/works", (request, response) => {
    response.sendFile(__dirname + "/views/works.html");
});
app.listen(5400, () => {
    console.log("Running on localhost:5400");
});
