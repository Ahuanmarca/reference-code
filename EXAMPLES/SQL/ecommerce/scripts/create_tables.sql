drop table if exists orders_products;
drop table if exists products_categories;
drop table if exists orders;
drop table if exists reviews;
drop table if exists users;
drop table if exists products;
drop table if exists categories;

create table
  users (
    id int auto_increment,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    birth date,
    primary key (id)
  );

create table
  products (
    id int auto_increment,
    description varchar(255),
    price decimal(13, 2),
    stock int,
    on_sale boolean,
    primary key (id)
  );

create table
  categories (
    id int auto_increment,
    description varchar(255),
    primary key (id)
  );

create table
  products_categories (
    id int auto_increment,
    product_id int,
    category_id int,
    primary key (id)
  );

create table
  orders (
    id int auto_increment,
    date date,
    user_id int,
    primary key (id)
  );

create table
  orders_products (
    id int auto_increment,
    product_id int,
    order_id int,
    quantity int,
    primary key (id)
  );

create table
  reviews (
    id int auto_increment,
    title varchar(255),
    content text,
    date date,
    product_id int,
    user_id int,
    primary key (id)
  );

alter table products_categories add foreign key (product_id) references products (id);
alter table products_categories add foreign key (category_id) references categories (id);
alter table orders add foreign key (user_id) references users (id);
alter table orders_products add foreign key (product_id) references products (id);
alter table orders_products add foreign key (order_id) references orders (id);
alter table reviews add foreign key (product_id) references products (id);
alter table reviews add foreign key (user_id) references users (id);

