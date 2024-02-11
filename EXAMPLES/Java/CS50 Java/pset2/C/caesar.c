#include <cs50.h>
#include <stdio.h>
#include <stdlib.h> // atoi()
#include <string.h> // strlen()
#include <ctype.h> // islower(), isupper()
#include <stdbool.h>

/*
* ciphertext[i] = (plaintext[i] + key) % 26;
*  
* Link cs50.h to compile:
* gcc caesar.c -o caesar -lcs50
*
* Use check50 locally
* check50 --local cs50/problems/2022/x/caesar
*/


bool areAllDigits(string key);


int main(int argc, string argv[]) 
{
    // Check for correct command-line arguments
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    if (!areAllDigits(argv[1]))
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    // Convert second argument to int
    int key = atoi(argv[1]) % 26;

    // Get plaintext string from user input
    string plaintext = get_string("plaintext: ");

    // Print ciphertext
    printf("ciphertext: ");
    for (int i = 0, l = strlen(plaintext); i < l; i++)
    {
        if (islower(plaintext[i]))
        {
            if (plaintext[i] + key > 122)
            {
                printf("%c", plaintext[i] - 26 + key);
            }
            else {
                printf("%c", plaintext[i] + key);
            }
        }
        else if (isupper(plaintext[i]))
            if (plaintext[i] + key > 90)
            {
                printf("%c", plaintext[i] - 26 + key);
            }
            else {
                printf("%c", plaintext[i] + key);
            }
        else
        {
            printf("%c", plaintext[i]);
        }
    }
    printf("\n");
}


// ASCII
//  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90
//   A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z

//  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122
//   a   b   c   d   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z


bool areAllDigits(string key)
{
    int lenght = strlen(key);
    for (int i = 0; i < lenght; i++)
    {
        if (isdigit(key[i]) == 0)
        {
            return false;
        }
    }
    return true;
}
