SET NAMES UTF8;
DROP DATABASE IF EXISTS my_pro;
CREATE DATABASE my_pro CHARSET=UTF8;
USE my_pro;
-- #1:创建user表
CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  -- 用户昵称
  userName VARCHAR(50) ,
  -- 手机号,及用户登录账号
  phone CHAR(11),
  -- 用户密码
  pwd  VARCHAR(32),
  -- 用户头像
  userHeadPic VARCHAR(50),
  -- 用户观看历史
  playHistory VARCHAR(50),
  -- 用户收藏
  collect VARCHAR(50) 
);
-- INSERT INTO user VALUES(null,"超级用户","17784726905","123456","","","");
#2:创建movie 电影表
CREATE TABLE movie(
  id INT PRIMARY KEY AUTO_INCREMENT,
  -- 电影名字
  movieNmme VARCHAR(30),
  -- 电影介绍
  movieIntr VARCHAR(50),
  -- 电影上映时间
  movieTime DATETIME,
  -- 拍摄国家
  movieCountry VARCHAR(10),
  -- 电影播放次数
  moviePlay INT,
  -- 电影分数,0~10分
  movieScore SMALLINT,
  -- 电影语言
  movieLanguage VARCHAR(5),
   -- 电影剧的类型
  movieClassify VARCHAR(5)

);
-- INSERT INTO movie VALUES(null,'流浪地球',"近未来，科学家们发现太阳急速衰老膨胀，短时间内包括地球在内的整个太阳系都将被太阳所吞没。为了自救，人类提出一个名为“流浪地球”的大胆计划，即倾全球之力在地球表面建造上万座发动机和转向发动机，推动地球离开太阳系，用2500年的时间奔往另外一个栖息之地。中国航天员刘培强（吴京 饰）在儿子刘启四岁那年前往国际空间站，和国际同侪肩负起领航者的重任。转眼刘启（屈楚萧 饰）长大，他带着妹妹朵朵（赵今麦 饰）偷偷跑到地表，偷开外公韩子昂（吴孟达 饰）的运输车，结果不仅遭到逮捕，还遭遇了全球发动机停摆的事件。为了修好发动机，阻止地球坠入木星，全球开始展开饱和式营救，连刘启他们的车也被强征加入。在与时间赛跑的过程中，无数的人前仆后继，奋不顾身，只为延续百代子孙生存的希望…… 本片根据刘慈欣的同名小说改编。80s电影天堂编辑整理","2019-02-05",);
-- #3:添加二条测试数据[合法]
-- #3:创建 TV 表
-- CREATE TABLE tv(
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   -- 电视剧名字
--   tvNmme VARCHAR(30),
--   -- 电视剧介绍
--   tvIntr VARCHAR(50),
--   -- 电视剧 开播时间
--   tvTime DATETIME,
--   -- 电视剧更新时间
--   tvUpdateTime DATETIME,
--   -- 电视剧是否完结
--   tvClear BOOL,
--   -- 电视剧集数
--   tvNum SMALLINT,
--   -- 电视剧剧集路径
--   tvAll VARCHAR(300),
--   -- 电视剧观看次数
--   tvPlay INT,
--   -- 电视剧的类型
--   tvClassify VALUES(5)
-- );
-- INSERT INTO movie VALUES(null,'流浪地球',md5('123'));



