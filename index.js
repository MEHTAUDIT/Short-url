const express=require('express');
const app=express();
const PORT=8000;
const bodyParser = require('body-parser');
const connect=require('./connect');
const urlRoutes=require('./routes/url');

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

connect('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.error(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/url',urlRoutes);
