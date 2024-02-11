#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height;
    do
    {
        height = get_int("Height: ");
    }
    while (height < 1 || height > 8);

    // rows
    for (int row = 0; row < height; row++)
    {
        // greater row == less spaces
        for (int spaces = height - row - 1; spaces > 0; spaces--)
        {
            printf(" ");
        }

        // greater row == more hashes
        for (int blocks = 0; blocks < row + 1; blocks++)
        {
            printf("#");
        }
        printf("\n");
    }
}
