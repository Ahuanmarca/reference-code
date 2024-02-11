#include <cs50.h>
#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>

/*
* Link cs50.h when compiling
* gcc substitution.c -o substitution -lcs50
* 
* Use check50 locally
* check50 --local cs50/problems/2022/x/substitution
*
* Testing:
* 
* ./substitution YTNSHKVEFXRBAUQZCLWDMIPGJO
* plaintext:  HELLO
* ciphertext: EHBBQ
* 
* ./substitution VCHPRZGJNTLSKFBDQWAXEUYMOI
* plaintext:  hello, world
* ciphertext: jrssb, ybwsp
* 
*/


const int KEY_LENGHT = 26;
bool validate_key(string key);

int main(int argc, string argv[])
{
    // Correct number of arguments
    if (argc != 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }

    // Key is valid (26 letters, all unique)
    if (!validate_key(argv[1]))
    {
        printf("Invalid key\n");
        return 1;
    }

    // Stores key in a variable
    char key[KEY_LENGHT];
    strcpy(key, argv[1]);

    // Gets plaintext from user input - ch50.h library function
    string plaintext = get_string("plaintext: ");

    // Print ciphertext

    /*
    * We use the ASCII values of the plaintext characters
    * to index the key, getting each ciphertext character.
    * 
    */

    printf("ciphertext: ");
    for (int i = 0, l = strlen(plaintext); i < l; i++)
    {
        if (islower(plaintext[i]))
        {
            int cipher_index = tolower(plaintext[i]) - 'a';
            printf("%c", tolower(key[cipher_index]));
        }
        else if (isupper(plaintext[i]))
        {
            int cipher_index = tolower(plaintext[i]) - 'a';
            printf("%c", toupper(key[cipher_index]));
        }
        else
        {
            printf("%c", plaintext[i]);
        }
    }
    printf("\n");
}


bool validate_key(string key)
{
    /*
    * ARRAY OF 26 BOOLEANS TO REMEMBER FOUND CHARACTERS
    * Uses ASCII value to index the array and set boolean to true,
    * so later we will know if the character was found before.
    */

    bool all_characters[KEY_LENGHT];
    for (int i = 0, l = KEY_LENGHT; i < l; i++)
    {
        all_characters[i] = false;
    }

    int unique_characters = 0;

    for (int i = 0, l = strlen(key); i < l; i++)
    {
        int current_character = tolower(key[i]);

        // Invalid characters (non letters)
        if (current_character < 'a' || current_character > 'z')
        {
            return false;
        }

        // Repeated characters (already found before)
        if (all_characters[current_character - 'a'] == true) {
            return false;
        }
        else
        {
            all_characters[current_character - 'a'] = true;
            unique_characters++;
        }
    }

    // Must have 26 unique characters
    if (unique_characters != KEY_LENGHT)
    {
        return false;
    }

    return true;
}
