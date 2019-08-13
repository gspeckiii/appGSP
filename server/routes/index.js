const express = require('express');
const router = express.Router();
const expRoute=require('./experiences');
const loginRoute=require('./login');
const feedbackRoute=require('./feedback');
module.exports=()=>{
    router.get('/',(req,res,next)=>{
        return res.render('index');
    });
    router.use('/experiences',expRoute());
    router.use('/feedback',feedbackRoute());
    router.use('/login',loginRoute());
    return router;
}