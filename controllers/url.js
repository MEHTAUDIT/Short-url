
const shortid = require('shortid');
const URL = require('../models/url');

async function generateShortUrl(req,res){

    const shortId=shortid(8);

    if(!req.body.redirectUrl){
        return res.status(400).json({error:'redirectUrl is required'});
    }

    await URL.create({
        shortId,
        redirectUrl:req.body.redirectUrl,
        visitHistory:[]
    });

    return res.json({id:shortId});
}

module.exports=generateShortUrl;