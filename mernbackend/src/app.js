const express = require("express");
const app = express();
require("./db/connect");


const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("hello from the garima")
});

app.listen(port, () => {
console.log(`server is running at port on ${port}`);
})