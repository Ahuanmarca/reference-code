# REPLACE COLUMN VALUES IN CSV FILE
# replaces values in a column in a csv file
# fills the complete columns with random DNI numbers (spain format)
# needs two cli arguments: "file name" and "column name"
# will execute only if file exists and column name exists

import random
import math
import csv
from tempfile import NamedTemporaryFile
import shutil
import sys
import os


def main():
    # Check for correct number of arguments
    if len(sys.argv) != 3:
        print("Incorrect Input")
        return

    # Check if file exists
    filename = sys.argv[1]
    path = "./" + filename
    if os.path.isfile(path) == False:
        print("File not found")
        return

    # Get fields from CSV file
    with open(filename) as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        for row in reader:
            fields = row  # * <= FIELDS !!
            break

    # Check if column exists in fields
    target = sys.argv[2]
    if (target in fields) == False:
        print("Column not found")
        return

    # Replace all values in target column with random DNIs
    print("Replacing", target, "column in", filename, "file")
    tempfile = NamedTemporaryFile(mode="w", delete=False)
    with open(filename, "r") as csvfile, tempfile:
        reader = csv.DictReader(csvfile)
        writer = csv.DictWriter(tempfile, fieldnames=fields)
        writer.writeheader()

        for row in reader:
            newRow = {}
            for key in row:
                if key == target:
                    newRow[key] = random_DNI()
                else:
                    newRow[key] = row[key]
            writer.writerow(newRow)
            # print(
            #     newRow["GivenName"],
            #     newRow["Surname"],
            #     newRow["MothersMaiden"],
            #     newRow[target],
            # )

    shutil.move(tempfile.name, filename)


def random_DNI():
    first = random.choice("1234567890XYZ")
    middle = str(random.randint(1000000, 9999999))
    last = random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    return first + middle + last


main()


