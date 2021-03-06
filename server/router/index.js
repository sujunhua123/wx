const express=require("express");
var router=express.Router();

var pool=require("../pool")

//获取数据库八宫图;

router.get('/imageList',(req,res)=>{
   var sql="select * from titleimage";
 pool.query(sql,(err,result)=>{
    if(err)throw error;
      res.send(result)
 })
})

//头部轮播图;

router.get("/lunboList",(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/images/logo1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/5.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/images/logo2.jpg"}
  ];
   res.send(rows)

})



//首页的珠宝资讯

router.get("/indexNews",(req,res)=>{
   var sql="select * from news";
   pool.query(sql,(err,result)=>{
     if(err)throw error;
       res.send(result);
   })

})


module.exports=router;