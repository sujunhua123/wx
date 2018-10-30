const express=require("express");
var router=express.Router();

var pool=require("../pool")

//获取商品的信息
router.get("/products",(req,res)=>{
   var sql="select * from products";
  pool.query(sql,(err,result)=>{
      if(err) throw error;
	  res.send(result);
  })
})

//通过商品的pid 查询商品的全部信息

router.get("/details",(req,res)=>{
	var pid=parseInt(req.query.pid);	
  var sql="select * from products where pid=? "
 pool.query(sql,[pid],(err,result)=>{
      if(err) throw error;
	   res.send(result);
 })

})

//获取list的导航栏信息

router.get("/navbar",(req,res)=>{
 var sql="select * from navbar"
pool.query(sql,(err,result)=>{
      if(err) throw error;
	   res.send(result);
 })

})




module.exports=router;