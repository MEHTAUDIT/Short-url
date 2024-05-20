const express=require('express');
const app=express();
const PORT=8000;
const bodyParser = require('body-parser');
const connect=require('./connect');
const urlRoutes=require('./routes/url');
const path=require('path');
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
const URL = require('./models/url');

connect('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.error(err));

app.set('view engine','ejs');
app.set("views",path.resolve("./views"));

app.get("/test",async (req,res)=>{
    const urls = await URL.find({});
    return res.render("home",{
        urls:urls
    });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/url',urlRoutes);
