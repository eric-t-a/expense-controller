require('dotenv').config({ path: '../.env' });
var path = require('path')

const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    res.sendFile(path.resolve(__dirname + "/../frontend/public/index.html"));
});

app.get("/login", (req, res, next) => {
    res.sendFile(path.resolve(__dirname + "/../frontend/public/index.html"));
});

app.get("/app/*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname + "/../frontend/public/index.html"));
});

app.get("/api/*", (req, res, next) => {
    res.json({'oie':'teste'})
});

app.use('/static', express.static(path.join(__dirname, '/../frontend/public')));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT},${__dirname}`)
})