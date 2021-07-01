const express = require("express");
const http = require("http")

const app = express();

app.get("/", async (req, res, next) => {
    console.log("GET req to /")
    res.status(200).send('<h1>Version 3</h1>');
});

const server = http.createServer(app);
server.listen(3000)
console.log("Listening on 3000");