#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <math.h>


/*
* Coleman-Liau index of a text:
* index = 0.0588 * L - 0.296 * S - 15.8
* L is the average number of letters per 100 words
* S is the average number of sentences per 100 words

Link cs50.h and math.h to compile:
gcc readability.c -o readability -lcs50 -lm

To use check50 locally:
check50 --local cs50/problems/2022/x/readability
*/


int* get_text_info(string text); // <= This function returns an array


int main(void) 
{
    string text = get_string("Text: ");

    int* info = get_text_info(text);
    float letters = info[0];
    float words = info[1];
    float sentences = info[2];

    // Average number of letters per 100 words
    float L = letters * (100 / words);

    // Average number of sentences per 100 words
    float S = sentences * (100 / words);
    
    float grade = 0.0588 * L - 0.296 * S - 15.8;

    // Debug print statement
    // printf("letters: %i\nwords: %i\nsentences: %i\n", letters, words, sentences);

    if (grade < 1)
    {
        printf("Before Grade 1\n");
        return 0;
    }
    else if (grade >= 16)
    {
        printf("Grade 16+\n");
    }
    else
    {        
        printf("Grade %i\n", lround(grade));
    }
}


// Using static array to be able to return an array from the function,
// so I can return all the counters from just one function call

int* get_text_info(string text)
{
    static int counters[3];
    counters[0] = 0; // counter for letters
    counters[1] = 1; // counter for words, starts at one because there's one more word than there are spaces
    counters[2] = 0; // counter for sentences

    int text_lenght = strlen(text);

    for (int i = 0; i < text_lenght; i++)
    {
        if (isalpha(text[i]))
        {
            counters[0]++;
        }

        if ((int) text[i] == 32) // ASCII for blank space
        {
            counters[1]++;
        }

        if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            counters[2]++;
        }
    }

    return counters;
}

