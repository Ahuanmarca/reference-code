-- Select all products
-- bought by Mia Harris
select
  products.description as "Products bought by Mia Harris",
  products.price as price
from
  products
  inner join orders_products
  inner join orders
  inner join users
  on products.id = orders_products.product_id
  and orders_products.order_id = orders.id
  and orders.user_id = users.id
where
  users.first_name = "Mia"
  and users.last_name = "Harris";


-- Select all products and their categories
select
  products.description as description,
  products.price as price,
  categories.description as category
from
  products
  inner join products_categories
  inner join categories
  on products.id = products_categories.product_id
  and products_categories.category_id = categories.id


-- Select all products (and their categories)
-- bought by Mia Harris
select
  products.description as "Products bought by Mia Harris",
  categories.description as category,
  products.price as price
from
  products
  left join orders_products
  inner join orders
  inner join users
  inner join products_categories
  inner join categories
  on products.id = orders_products.product_id
  and orders_products.order_id = orders.id
  and orders.user_id = users.id
  and products_categories.product_id = products.id
  and products_categories.category_id = categories.id
where
  users.first_name = "Mia"
  and users.last_name = "Harris";