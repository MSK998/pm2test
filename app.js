const express = require("express");
const http = require("http")

const app = express();

app.get("/", async (req, res, next) => {
    res.status(200).write('<h1>Version 1</h1>');
});

const server = http.createServer(app);
server.listen(3000)