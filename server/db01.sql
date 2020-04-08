#db01.sql

#功能二:商品列表  10:36
#1:向xz_laptop 商品列表中添加一列pic保存商品图片
USE xz;
ALTER TABLE xz_laptop ADD pic VARCHAR(255);
#2:更新pic列数据
UPDATE xz_laptop SET pic='01.jpg' WHERE lid = 1;
UPDATE xz_laptop SET pic='02.jpg' WHERE lid > 1;
#3:复制mysql控制台执行生效(你操作)