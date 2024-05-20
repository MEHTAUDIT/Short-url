const express=require('express');
const router=express.Router();
const shortid = require('shortid');
const URL = require('../models/url');

// const {generateShortUrl} = require('../controllers/url');

router.post("/",async (req,res)=>{
    const shortId=shortid(8);
    console.log(req.body);
    
    if(!req.body.url){
        return res.status(400).json({error:'url is required'});
    }
    console.log(req.body.url);
    
    await URL.create({
        shortId:shortId,
        rediectUrl:req.body.url,
        visitHistory:[]
    });

    return res.json({id:shortId});
});

router.get("/:shortId", async (req,res)=>{

    const url = await URL.findOne({shortId:req.params.shortId});
    if(!url){
        return res.status(404).json({error:'Url not found'});
    }
    url.visitHistory.push({timestamp:Date.now()});
    await url.save();
    return res.redirect(url.rediectUrl);
});

router.get("/analytics/:shortId", async (req,res)=>{

    const shortId=req.params.shortId;
    const url= await URL.findOne({shortId});
    if(!url){
        return res.status(404).json({error:'Url not found'});
    }
    return res.json({visitCount:url.visitHistory.length , analytics:url.visitHistory});
})

module.exports=router;
