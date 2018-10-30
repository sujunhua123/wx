#创建商品表; t_shop;

id;title;tel;address;time;price;

#创建商品图片表  t_shop_photo;
id; tid; sm_url; md_url; lg_url;

CREATE TABLE t_shop(
    id INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(255),
   tel VARCHAR(16),
   address VARCHAR(255),
   time VARCHAR(50),
   price DECIMAL(10,2)
);


CREATE TABLE t_shop_photo(
  id INT PRIMARY KEY AUTO_INCREMENT,
  tid INT,
  sm_url VARCHAR(255),
  md_url VARCHAR(255),
  lg_url VARCHAR(255)
);

INSERT INTO t_shop VALUES(null,"牛排一",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排二",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排三",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排四",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排五",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排六",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排七",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排八",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排九",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排十",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排十一",'13611285498',
"万寿路",'早8点~晚8点','300000');
INSERT INTO t_shop VALUES(null,"牛排十二",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排十三",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排十四",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排十五",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排十六",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排十七",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排十八",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排十九",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排二十",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排二一",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排二十二",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排二十三",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排二十四",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");
INSERT INTO t_shop VALUES(null,"牛排二十五",'13611285498',
"万寿路",'早8点~晚8点','300000',"92");


#创建商品信息表 
CREATE TABLE t_shop_photo(
  id INT PRIMARY KEY AUTO_INCREMENT,
  tid VARCHAR(50),
  sm_url VARCHAR(255),
  md_url VARCHAR(255),
  lg_url VARCHAR(255)
);
INSERT INTO t_shop_photo VALUES(null,"牛排2",'13611285498',
"万寿路",'早8点~晚8点','300000');


INSERT INTO t_shop_photo VALUES(null,"1","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"2","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"3","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"4","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"5","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"6","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"7","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"8","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"9","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"10","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"11","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"12","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"13","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"14","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"15","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"16","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"17","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"18","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"19","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"20","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"21","http://127.0.0.1:3000/niupai.png","","");

INSERT INTO t_shop_photo VALUES(null,"22","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"23","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"24","http://127.0.0.1:3000/niupai.png","","");
INSERT INTO t_shop_photo VALUES(null,"25","http://127.0.0.1:3000/niupai.png","","");


select t.id,t.title,t.tel,t.address,t.time,t.price,p.sm_url,
from t_shop t INNER JOIN t_shop_photo p ON t.id=p.tid LIMIT 0,8;

#增加一列
ALTER TABLE t_shop ADD score INT;



ALTER TABLE t_shop ADD tid INT;
UPDATE t_shop SET tid = 1
WHERE id < 15;
UPDATE t_shop SET tid = 2
WHERE id >= 15;


