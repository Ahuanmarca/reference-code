# 🚨 Don't change the code below 👇
print("Welcome to Python Pizza Deliveries!")
size = input("What size pizza do you want? S, M, or L ")
add_pepperoni = input("Do you want pepperoni? Y or N ")
extra_cheese = input("Do you want extra cheese? Y or N ")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇

# Check for valid input
size = size.lower()
pepp = add_pepperoni.lower()
chee = extra_cheese.lower()
if size not in 'sml' or pepp not in 'yn' or chee not in 'yn':
    print("Invalid Input")
    exit()

"""
Pizza class to create pizza object that contains prices for the sizes and extras.
Aprovecho el ejercicio para practicar clases y objetos.
No tiene error checking, asume que usuario dará input correcto.
"""

class Pizza:

    # Size types
    small = "s"
    # medium = "m"
    # large = "l"

    # Prices
    prices = {
        "s": 15, 
        "m": 20, 
        "l": 25,
        "s_pepp": 2,
        "ml_pepp": 3,
        "extra_cheese": 1,
        "no_extra": 0
    }

    # Basic properties: size, extra pepperoni and extra cheese
    def __init__(self, size, pepp, chee):
        self.size = size
        self.add_pepperoni = True if pepp == "y" else False
        self.extra_cheese = True if chee == "y" else False
        

    # Base price, based on the pizza's size
    @property
    def base_price(self):
        return self.prices[f'{self.size}']
    
    # Extra pepperoni price, based on the pizza's size and whether the client wants to add pepperoni or not
    @property
    def extra_pepperoni_price(self):
        if not self.add_pepperoni:
            return self.prices['no_extra']
        else:
            return self.prices['s_pepp'] if self.size == self.small else self.prices['ml_pepp']

    # Extra cheese price, based on whether the client wants extra cheese or not
    @property
    def extra_cheese_price(self):
        return self.prices['extra_cheese'] if self.extra_cheese else self.prices['no_extra']

    # Final price, based on size, extra pepperoni and extra cheese
    @property
    def final_price(self):
        return self.base_price + self.extra_pepperoni_price + self.extra_cheese_price


# Create order with Pizza Class
order = Pizza(size, pepp, chee)

# Print final bill
print(f'Your final bill is: ${order.final_price}.')
