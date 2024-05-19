const express=require('express');
const router=express.Router();
const shortid = require('shortid');

const {generateShortUrl} = require('../controllers/url');

router.post("/",generateShortUrl);

module.exports=router;
