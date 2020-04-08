//功能:服务器程序
//1:引入四个模块
const express = require("express"); //web服务器模块
const mysql = require("mysql"); //mysql模块
const session = require("express-session"); //session模块
const cors = require("cors"); //跨域
// npm i body-parser    下载body-parser模块的指令 如果需要用post和delete请求就必须下载
const bodyParser = require("body-parser"); //引入body-parser模块
//2:创建连接池
var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "my_pro",
  port: 3306,
  connectionLimit: 15,
});
//3:创建web服务器
var server = express();
//4:配置跨域模块
//4.1:允许程序列表 脚手架
//4.2:每次请求验证
server.use(
  cors({
    origin: [
      "http://192.168.43.166:8081",
      "http://127.0.0.1:8080",
      "http://localhost:8080",
    ],
    credentials: true,
  })
);
//配置 body-parser 如果需要用到post和delete就必须配置这个
console.log("配置body-parser");
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//5:指定静态资源目录 public
server.use(express.static("public"));
//6:配置session对象
server.use(
  session({
    secret: "128位安全字符串", //加密条件
    resave: true, //每次请求更新数据
    saveUninitialized: true, //保存初始化数据
  })
);
//7:为服务器绑定监听端口 4000
server.listen(4000);
console.log("服务器起动.......");

// 查询用户名是否已存在--注册
server.get("/selectUserName", (req, res) => {
  // console.log("运行 查询用户名是否已存在--注册 接口");
  //1:获取脚手架传递用户名和密码
  var userName = req.query.userName;
  // console.log("userName:", userName);
  //2:创建sql语法并且将用户名和密码加入
  var sql = "SELECT userName FROM user WHERE userName=?";
  //3:执行sql语法并且获取返回结果
  pool.query(sql, [userName], (err, result) => {
    //3.1:如果出现严重错误抛出
    if (err) throw err;
    if (result.length == 0) {
      // console.log("该用户名可用");
      res.send({
        code: 0,
        msg: "该用户不存在",
      });
    } else {
      // console.log("该用户名已被占用");
      res.send({
        code: 1,
        msg: "该用户已存在",
      });
    }
  });
});

// 查询手机号是否已经被注册--注册
server.post("/selectUserPhone", (req, res) => {
  //1:获取脚手架传递用户名和密码
  var phone = req.body.phone;
  // console.log(phone);
  //2:创建sql语法并且将用户名和密码加入
  var sql = "SELECT phone FROM user WHERE phone=?";
  //3:执行sql语法并且获取返回结果
  pool.query(sql, [phone], (err, result) => {
    //3.1:如果出现严重错误抛出
    if (err) throw err;
    // console.log(result.length);
    if (result.length == 0) {
      // console.log("该手机号尚未被注册");
      res.send({
        code: 0,
        msg: "该手机号尚未被注册",
      });
    } else {
      // console.log("该手机号已被占用");
      res.send({
        code: 1,
        msg: "该手机号已被占用",
      });
    }
  });
});

//功能一:用户注册
server.post("/register", (req, res) => {
  //1:获取脚手架传递用户名和密码
  console.log("运行用户注册接口");
  var userNname = req.body.userNname;
  var phone = req.body.phone;
  var pwd = req.body.pwd;
  console.log(userNname);
  console.log(phone);
  console.log(pwd);
  // //2:创建sql语法并且将用户名和密码加入
  var sql = `INSERT INTO user VALUES(null,"${userNname}","${phone}",md5("${pwd}"),"","","")`;
  // //3:执行sql语法并且获取返回结果
  pool.query(sql, (err, result) => {
    //3.1:如果出现严重错误抛出
    if (err) throw err;
    if (result.affectedRows != 0) {
      console.log("注册成功");
      res.send({
        code: 1,
        msg: "注册成功",
      });
    } else {
      console.log("注册失败");
      res.send({
        code: -1,
        msg: "注册失败",
      });
    }
  });
});

// 用户登录
server.post("/login", (req, res) => {
  //1:获取脚手架传递用户名和密码
  console.log("运行用户登录接口");
  var phone = req.body.phone;
  var pwd = req.body.pwd;
  // console.log(phone);
  // console.log(pwd);
  // // //2:创建sql语法并且将用户名和密码加入
  var sql =
    "SELECT id,userName,userHeadPic,playHistory,collect FROM user WHERE phone=? AND pwd=md5(?)";
  // // //3:执行sql语法并且获取返回结果
  pool.query(sql, [phone, pwd], (err, result) => {
    //3.1:如果出现严重错误抛出
    if (err) throw err;
    console.log(result);
    if (result.length == 0) {
      res.send({
        code: -1,
        msg: "登录失败,用户名或者密码错误",
      });
    } else {
      req.session.uid = result[0].id;
      res.send({
        code: 1,
        msg: "登录成功",
        data: result,
      });
    }
  });
});
