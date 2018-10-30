const express=require("express")
var router=express.Router();

var pool=require("../pool")


//获取news数据库的小图
router.get("/smallnews",(req,res)=>{
   var sql="select * from smallnews";
   pool.query(sql,(err,result)=>{
     if(err)throw error;
       res.send(result);
   })

})



//获取news的新闻列表

router.get("/newslist",(req,res)=>{
   var sql="select * from news";
   pool.query(sql,(err,result)=>{
     if(err)throw error;
       res.send(result);
   })

})

//通过查news列表的pid 传参数

router.get("/news",(req,res)=>{
   var pid=(req.query.pid);
 var sql="select * from news where pid=?"
 pool.query(sql,[pid],(err,result)=>{
     if(err)throw err
		res.send(result)
  })

})


module.exports=router;