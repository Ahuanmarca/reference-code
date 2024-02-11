"""
Follow Along
Python OOP Tutorials - Working with Classes
Tutorial by Corey Schafer
https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc
"""

class Employee:

    # CLASS VARIABLES
    num_of_emps = 0
    raise_amount = 1.04

    # Each method within the class automatically takes the instance as his first argument. By convention we call it 'self':

    def __init__(self, first, last, pay):
        self.first = first # Remember, 'self' references the INSTANCE
        self.last = last
        self.pay = pay

        # This changes num_of_emps on the Class, affecting all of it's instances
        Employee.num_of_emps += 1

    # METHODS

    # Con el property decorator se puede crear un method que se puede llamar como si fuera un property (sin paréntesis)
    @property
    def email(self):
        return f'{self.first.lower()}.{self.last.lower()}@company.com'

    @property
    def fullname(self):
        return f'{self.first} {self.last}'

    # Con el "SETTER" decorator se pueden cambiar propiedades creadas con @property decorator
    #   Permite hacer un llamado como si fullname fuera un property normal
    @fullname.setter
    def fullname(self, name):
        first, last = name.split(' ')
        self.first = first
        self.last = last

    @fullname.deleter
    def fullname(self):
        print('Delete Name')
        self.first = None
        self.last = None

    # This changes the pay using the raise_amount FROM THE INSTANCE, not from the Class
    #   The instance can have a different raise_amount than the Class
    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)

    # This method affects the whole Class
    #   Class methods automatically pass the class as the first argument
    @classmethod
    def set_raise_amount(cls, amount):
        cls.raise_amount = amount

    # Class methods can be used as alternative class constructors
    @classmethod
    def from_string(cls, emp_str):
        first, last, pay = emp_str.split('-')
        return cls(first, last, pay)

    # Static methods don't pass anything 
    #   Do we put them here just to have them handy?
    @staticmethod
    def is_workday(day):
        if day.weekday() == 5 or day.weekday() == 6:
            return False
        return True

    # Estos dos methods son para mostrar información sobre este Class
    #   __repr__ se usa más para developers
    #   __str__ se usa más para end users

    def __repr__(self):
        return f"Employee('{self.first}', '{self.last}', {self.pay})"

    def __str__(self):
        return '{} - {}'.format(self.fullname, self.email)


# SUBCLASSES
#   Si queremos que tenga otros atributos además de los heredados de Employee,
#   es necesario hacerle su propio __init__

class Developer(Employee):
    raise_amount = 1.09

    def __init__(self, first, last, pay, prog_lang):
        # El __init__ de Employee se encarga de first, last y pay
        # ...para no tener que hacer copy-paste de todo ese código
        super().__init__(first, last, pay)
        self.prog_lang = prog_lang


class Manager(Employee):
    raise_amount = 1.14

    def __init__(self, first, last, pay, employees=None):
        super().__init__(first, last, pay)
        if employees is None:
            self.employees = []
        else:
            self.employees = employees
        
    def add_employee(self, emp):
        if emp not in self.employees:
            self.employees.append(emp)

    def remove_employee(self, emp):
        if emp in self.employees:
            self.employees.remove(emp)

    def print_employees(self):
        print(self.fullname)
        for emp in self.employees:
            print('-->', emp.fullname)



# TESTING...

emp_1 = Employee('Gendou', 'Ikari', 50000)
dev_1 = Developer('Maya', 'Ibuki', 60000, 'Python')
mng_1 = Manager('Rei', 'Ayanami', 70000, [emp_1])
mng_1.add_employee(dev_1)
mng_1.print_employees()


# 06 PROPERTY DECORATORS - GETTERS, SETTERS, DELETERS
# emp_1.fullname = 'Gendou Ikari'
# print(emp_1.fullname)