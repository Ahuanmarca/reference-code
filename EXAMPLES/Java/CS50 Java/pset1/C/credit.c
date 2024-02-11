#include <cs50.h>
#include <stdio.h>
#include <math.h>
#include <stdbool.h>


/*
* Try to validate credit card's by checking number of digits,
* first digits, and testing with Luhn's Algorithm
*
* AMEX:         Starts with 34 or 37, has 15 digits
* MASTERCARD:   Starts with 51, 52, 53, 54, 55, had 16 digits
* VISA:         Starts with 4, has 13 or 16 digits
*
* LUHN'S ALGORITHM
*   1) Multiply every other digit by 2, starting with the number's second-to-last digit, and then add those product's digits together
*   2) Add the sum to the sum of the digits that weren't multiplied by 2
*   3) If the total's last digit is 0 (if the total modulo 10 is congruent to 0), the number is valid
*
* AMEX (15 digits), 34 o 37
* 340000000000000 a 349999999999999
* 370000000000000 a 379999999999999
* MasterCard (16 digits), 51, 52, 53, 54, 55
* 5100000000000000 a 5599999999999999
* Visa (13 o 16 digits), 4
* 4000000000000 a 4999999999999
* 4000000000000000 a 4999999999999999
*
*/


int count_digits(long number);
int get_first_digits(long number, int digits);
bool luhn(long number, int digits);
string get_card_type(int digits, int fd);


int main(void)
{
    // Get number from user
    long number = get_long("Number: ");

    // Count digits
    int digits = count_digits(number);

    // Validate number of digits
    if (!(digits == 13 || digits == 15 || digits == 16))
    {
        printf("INVALID\n");
        return 0;
    }

    // Get first two digits from the number
    int fd = get_first_digits(number, digits);

    // Validate first two digits
    if (!(fd == 34 || fd == 37 || (fd >= 51 && fd <= 55) || (int) fd/10 == 4))
    {
        printf("INVALID\n");
        return 0;
    }

    // Validate with luhn's algorithm
    if (!(luhn(number, digits)))
    {
        printf("INVALID\n");
        return 0;
    }

    printf("%s\n", get_card_type(digits, fd));
}




bool luhn(long number, int digits)
{
    int total = 0;

    for (int i = 1; i <= digits; i++)
    {
        // Slice number
        long divider = pow(10, i - 1);
        long current_number = (number % (divider * 10)) / divider;

        if (i % 2 == 0)
        {
            // duplicate number, add result's digits, add that result to total
            int duplicated  =   current_number * 2;
            int tens        =   duplicated / 10;
            int ones        =   duplicated % 10;
            total += (tens + ones);
        }
        else
        {
            // add digit to the total, without manipulation
            total += current_number;
        }
    }

    if (total % 10 == 0)
    {
        return true;
    }
    return false;

}


string get_card_type(int digits, int fd)
{
    if (digits == 15 && (fd == 34 || fd == 37))
    {
        return "AMEX";
    }
    else if (digits == 16 && (fd >= 51 &&  fd <= 55))
    {
        return "MASTERCARD";
    }
    else if (digits == 16 && ((int) fd/10 == 4))
    {
        return "VISA";
    }
    else if (digits == 13 && ((int) fd/10 == 4))
    {
        return "VISA";
    }
    else
    {
        return "INVALID";
    }
}


int count_digits(long number) {
    long n = number;
    int count = 0;
    while (n != 0)
    {
        n = n / 10;
        count++;
    }
    return count;
}


int get_first_digits(long number, int digits) {
    long divider = pow(10, digits-2);
    int first_digits = number / divider;
    return first_digits;
}
