# eCommerce Database filled with placeholder data

## Tables

- users
- products
- orders
- orders_products (relational)
- categories
- products_categories (relational)
- reviews

| Table               | Size   | Comment                                                |
| ------------------- | ------ | ------------------------------------------------------ |
| users               | 100    | 95% of users have placed orders at least once          |
| products            | 500    | 99% of products have sales, 10% are on sale            |
| orders              | 500    | Orders have an average of 5 different items            |
| orders_products     | 2500   | Quantity is between 1 and 4 (most should have 1)       |
| categories          | 50     | An average of 10 products per category                 |
| products_categories | Medium |                                                        |
| reviews             | Medium | 35% of users wrote reviews, some of them several times |

| first_name | last_name | pronouns | email | birth | product | order_id | category | purchase_date | quantity | description | price | stock | on_sale | reviews | review_date |
| ---------- | --------- | -------- | ----- | ----- | ------- | -------- | -------- | ------------- | -------- | ----------- | ----- | ----- | ------- | ------- | ----------- |

## Prompts for ChatGPT

Create a csv file with the following fields:
first_name, last_name, pronouns, email, birth.
Fill the file with 100 random entries.

Create a csv file with the following fields representing christmas products and toys:
description, price, stock, on_sale.
Fill the table with 500 random products.


Create a csv file with the following fields:
first_name, last_name, pronouns, email, birth, product, order_id, category, purchase_date, quantity, description, price, stock, on_sale, reviews, review_date
Fill with 100 users represented by 100 distinct combinations of first_name and last_name, each one with it's distinct email and birth date.
95 of the 100 users have purchased items. The other 5 not, so the remaining columns must be empty for them.
There are 500 distinct products. All products are christmas products and / or toys.
There are 500 orders. Each order contains between 2 and 8 distinct products, with an average of 5 distinct products per order.
The bought products that belong to the same order are associated with the order_id.
There are 50 categories. All products must have at least one category. Products can have more than one category. Around half of the products must have 2 or 3 categories.
30 of the buying customers have left reviews for one or more bought products.
Ten customers have left only one review ever.
Ten customers have left 2 or 3 reviews.
Ten customers have left between 5 and 10 reviews.
The reviews are between 50 and 100 characters.
The date of the review must be later than the date of purchase.


first_name,last_name,pronouns,email,birth,product,order_id,category,purchase_date,quantity,description,price,stock,on_sale,reviews,review_date
Alice,Smith,she/her,alice.smith@email.com,1990-03-15,Toy Train,1,Toys,2023-11-01,3,Christmas-themed toy train,19.99,50,true,Good product,2023-11-10
Bob,Johnson,he/him,bob.johnson@email.com,1985-08-22,Santa Claus Figurine,2,Decor,2023-11-02,2,Festive Santa Claus figurine,29.99,30,false,Amazing decoration,2023-11-12
Charlie,Williams,they/them,charlie.w@email.com,1992-05-10,Christmas Lights,3,Decor,2023-11-03,5,Colorful Christmas lights,12.99,100,true,Nice ambiance,2023-11-15
David,Jones,he/him,david.jones@email.com,1988-12-03,Toy Soldier,4,Toys,2023-11-04,1,Classic toy soldier,9.99,80,true,Fun toy for kids,2023-11-18
Emily,Brown,she/her,emily.brown@email.com,1995-07-20,Christmas Tree Ornament,5,Decor,2023-11-05,4,Ornament for Christmas tree,6.99,150,false,Beautiful ornament,2023-11-20
...


