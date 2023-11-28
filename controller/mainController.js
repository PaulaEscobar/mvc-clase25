const path = require("path");

const mostrarHome = (req,res) => {
    res.sendFile(path.join(__dirname,"../views/home.html"))
}

const mostrarAbout = (req,res) => {
    res.sendFile(path.join(__dirname,"../views/about.html"))
}

module.exports = {
    mostrarHome, 
    mostrarAbout
}
