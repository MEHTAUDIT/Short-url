const mongoose=require('mongoose');

const urlScama = new mongoose.Schema({

    shortId:{
        type:String,
        required:true,
        unique:true
    },
    rediectUrl:{
        type:String,
        required:true
    },
    visitHistory:[{timestamp:{type:Number}}]
    
},{timestamps:true});

const URL=mongoose.model('Url',urlScama);
module.exports=URL;
