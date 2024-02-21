const morgan = require ('morgan');
const express = require('express');
const app = express();
require('./db')
//routers
const user = require ('./routes/user');

app.use("/user",user);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});