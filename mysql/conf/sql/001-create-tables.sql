CREATE DATABASE post_db;
use post_db;

CREATE TABLE users (
  id int(10) unsigned not null auto_increment,
  name varchar(30) not null,
  email varchar(255) not null unique,
  password varchar(30) not null,
  confirmPassword varchar(30) not null,
  created_time datetime not null default current_timestamp,
  updated_time datetime not null default current_timestamp on update current_timestamp,
  primary key (id)
);