const express = require('express');
const router = express.Router();

module.exports=()=>{
    router.get('/',(req,res,next)=>{
        return res.render('login');
    });
    router.post('/',(req,res,next)=>{
        return res.send('Form send');
    });

    return router;
}