DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;

CREATE TABLE `chirps` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  	`burger_name` VARCHAR( 255) NOT NULL,
  	`devoured` BOOLEAN DEFAULT NOT NULL,
	PRIMARY KEY (id)
);