const express = require('express');
const app = express();
const path = require("path");

const mainRouter = require("./routers/main.js");

const port = 3000;

app.use("/", mainRouter);


app.use(express.static(path.join(__dirname,"public")));


app.listen(port, () => {
    console.log(`servidor corriendo en puerto ${port}`);
    });

