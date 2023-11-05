const express = require("express");
const path = require("path");
const app = express();
require("./db/connect");


const port = process.env.port || 3000;

 const static_path = path.join(__dirname, "../public")

 app.use(express.static(static_path));



app.get("/", (req, res) => {
    res.send("hello from the garima")
});

app.listen(port, () => {
console.log(`server is running at port on ${port}`);
})