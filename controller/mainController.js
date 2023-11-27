const path = require("path");

const mostrarHome = (req,res) => {
    res.sendFile(path.join(__dirname,"../views/home.html"))
}

module.exports = {
    mostrarHome
}
