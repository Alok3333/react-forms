const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: '123test'
    });
});

app.listen(8001, () => console.log("API is running on http://localhost:8001/login"));