const express = require('express');
const router = express.Router();
module.exports=()=>{
    router.get('/',(req,res,next)=>{
        return res.render('experiences');
    });
    router.get('/:name',(req,res,next)=>{
        return res.send(`Experience page for ${req.params.name}`);
    });

    return router;
}