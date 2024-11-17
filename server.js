const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//  // Capitalize the model name for convention
// const menu = require("./models/menu");

app.get("/", function (req, res) {
    res.send("Hello world");
});

// Fix syntax error in async function






const menuItemRoutes = require('./routes/menuItemRoutes');
const personRoutes = require('./routes/personRoutes');
app.use('/menu',menuItemRoutes);

app.use('/person',personRoutes);






app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
