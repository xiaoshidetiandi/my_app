#功能三:创建购物车表
USE xz;
CREATE TABLE xz_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  lid INT,
  lname VARCHAR(255),
  price DECIMAL(10,2),
  count INT,
  uid INT
);
