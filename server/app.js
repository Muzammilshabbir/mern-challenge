const config = require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

const userRoutes = require('./routes/user')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const { DBURI, PORT } = process.env
// connect();
mongoose.connect(DBURI,{useUnifiedTopology: true,useNewUrlParser: true,autoIndex: true})
    .then((result) => app.listen(PORT || 5000))
    .catch((err) => console.log(err))

const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use("/api",userRoutes)
