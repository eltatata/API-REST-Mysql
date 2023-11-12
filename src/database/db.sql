create database if not exists db_api_mysql;
use db_api_mysql;

create table employees (
	id int not null auto_increment primary key,
    name varchar(45) default null, 
    salary int default null
); 