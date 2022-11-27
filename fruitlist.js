var express = require('express');
var router = express.Router();
var connection  = require('../database');
 
 
/* GET home page. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT * FROM fruits',function(err,rows)     {
 
        if(err){
         req.flash('error', err); 
         res.render('fruit-list',{data:''});   
        }else{
            
            res.render('fruit-list',{data:rows});
        }
                            
         });
        
    });
 
 
module.exports = router;