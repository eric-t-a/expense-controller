require('dotenv').config({ path: '../.env' });
var path = require('path')

const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    res.sendFile(path.resolve(__dirname + "/../frontend/public/index.html"));
})

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server running on port ${process.env.BACKEND_PORT},${__dirname}`)
})