drop table if exists pet;

create table
  pet (
    id int auto_increment,
    name varchar(20),
    owner varchar(20),
    species varchar(20),
    sex char(1),
    birth date,
    death date,
    primary key(id)
  );

load data local infile './pet.csv'
into table pet
fields terminated by ','
ignore 1 rows
(name, owner, species, sex, birth, death);

select * from pet;