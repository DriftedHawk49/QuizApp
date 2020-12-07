const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 5000);
const Misc = require('./misc.controller');

const databaseURL = 'mongodb+srv://QuizApp:grkscWkifdaNwOf1@cluster0.kkgee.mongodb.net/<dbname>?retryWrites=true&w=majority';

// mongoose.connect(databaseURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(()=>{
//     console.log("Database Server Started");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/api/getquiz', Misc.getQuestions);



app.listen(PORT, function(){
    console.log("Server Started at port "+PORT);
});




