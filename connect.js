const mongoose=require('mongoose');

async function connect(url){
    try{
        await mongoose.connect(url);
    }catch(err){
        console.error(err);
    }
}

module.exports=connect;