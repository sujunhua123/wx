const express=require("express");
const fs=require("fs");
const multer=require("multer");
const pool=require("./pool");

var index=require("./router/index.js")
var list=require("./router/list.js")
var carts=require("./router/carts.js")
var news=require("./router/news.js")
var app=express();
app.listen(3000);
app.use(express.static(__dirname+"/public"))



app.use('/index',index)
app.use("/list",list)
app.use("/carts",carts)
app.use("/news",news)
