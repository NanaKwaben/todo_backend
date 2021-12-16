
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { json } = require('express');
const todoRoutes = require("./routes/todoRoutes")

const app = express();

//assign a unique
const port = 5000;

//user cors package
app.use(cors());

app.use(json());


//initial route
app.get('/', function(req, res) {
    res.send("Welcome to homepage");
});json

//assign routes to app and identify them with a particular path
app.use("/todos",todoRoutes);

app.listen(port, function(){
    console.log(`Listening on http://localhost:${port}`);
})



const dbURI = 'mongodb+srv://caleb1:caleb1987@cluster0.hyvbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');
    })
    .catch((err) => console.log(err));