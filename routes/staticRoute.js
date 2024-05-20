const express = require("express");
const router = express.Router();
const URL= require("../models/url");

router.get("/test",async (req,res)=>{

    const urls = await URL.find({});
    return res.render("home",{
        urls:urls
    });

});

module.exports = router;
