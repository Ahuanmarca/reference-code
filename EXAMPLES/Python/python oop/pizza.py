# 🚨 Don't change the code below 👇
print("Welcome to Python Pizza Deliveries!")
size = input("What size pizza do you want? S, M, or L ")
add_pepperoni = input("Do you want pepperoni? Y or N ")
extra_cheese = input("Do you want extra cheese? Y or N ")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇

"""
Pizza class to create pizza object that contains prices for the sizes and extras.
Aprovecho el ejercicio para practicar clases y objetos.
No tiene error checking, asume que usuario dará input correcto.
"""

class Pizza:

    # Size types
    small = "S"
    medium = "M"
    large = "L"

    # Prices
    smallPrice = 15
    mediumPrice = 20
    largePrice = 25
    small_with_extra_pepperoni = 2
    medium_or_large_with_extra_pepperoni = 3
    extra_cheese = 1

    # Basic properties: size, extra pepperoni and extra cheese
    def __init__(self, size, extra_pepperoni, extra_cheese):
        self.size = size.upper()
        self.extra_pepperoni = extra_pepperoni.upper()
        self.extra_cheese = extra_cheese.upper()

    # Base price, based on the pizza's size
    @property
    def base_price(self):
        if self.size == Pizza.small:
            return Pizza.smallPrice
        elif self.size == Pizza.medium:
            return Pizza.mediumPrice
        elif self.size == Pizza.large:
            return Pizza.largePrice
    
    # Extra pepperoni price, based on pizza size and whether the client asks for extra pepperoni or not
    @property
    def extra_pepperoni_price(self):
        if self.extra_pepperoni == "N":
            return 0
        else:
            if self.size == Pizza.small:
                return Pizza.small_with_extra_pepperoni
            elif self.size == Pizza.medium or self.size == Pizza.large:
                return Pizza.medium_or_large_with_extra_pepperoni

    # Extra cheese price, based on whether the client asks for extra cheese (regardless of size)
    @property
    def extra_cheese_price(self):
        if self.extra_cheese == "N":
            return 0
        else:
            return 1

    # Final price, based on size, extra pepperoni and extra cheese
    @property
    def final_price(self):
        return self.base_price + self.extra_pepperoni_price + self.extra_cheese_price


# Create order with Pizza Class
order = Pizza(size, add_pepperoni, extra_cheese)

# Print final bill
print(f'Your final bill is: ${order.final_price}.')
