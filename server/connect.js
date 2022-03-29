const mongoose = require('mongoose');
const express = require('express');

const app = express();
const { DBURI, PORT } = process.env

exports.connect = () => {
    mongoose.connect(DBURI,{useUnifiedTopology: true,useNewUrlParser: true,autoIndex: true})
    .then((result) => app.listen(PORT || 5000))
    .catch((err) => console.log(err))
}
