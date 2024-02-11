// tideman.c 2022-09-19

#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// preferences[i][j] is number of voters who prefer i over j
int preferences[MAX][MAX];

// locked[i][j] means i is locked in over j
bool locked[MAX][MAX];

// Each pair has a winner, loser
typedef struct
{
    int winner;
    int loser;
}
pair;

// Array of candidates
string candidates[MAX];
pair pairs[MAX * (MAX - 1) / 2];

int pair_count;
int candidate_count;

// Function prototypes
bool vote(int rank, string name, int ranks[]);
void record_preferences(int ranks[]);
void add_pairs(void);
void sort_pairs(void);
void lock_pairs(void);
void print_winner(void);

// Additional functions
int win_power(int current_pair);
bool has_cycle(int origin, int next_pair);

// Debugging functions
void print_preferences_array(void);
void print_pairs_array(void);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: tideman [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i] = argv[i + 1];
    }

    // Clear graph of locked in pairs
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = 0; j < candidate_count; j++)
        {
            locked[i][j] = false;
        }
    }

    pair_count = 0;
    int voter_count = get_int("Number of voters: ");

    // Query for votes
    for (int i = 0; i < voter_count; i++)
    {
        // ranks[i] is voter's ith preference
        int ranks[candidate_count];

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);

            if (!vote(j, name, ranks))
            {
                printf("Invalid vote.\n");
                return 3;
            }
        }

        record_preferences(ranks);

        printf("\n");
    }

    add_pairs();
    sort_pairs();
    lock_pairs();
    print_winner();
    return 0;
}

// Update ranks given a new vote
bool vote(int rank, string name, int ranks[])
{
    // Linear search for candidate's name
    for (int i = 0; i < candidate_count; i++)
    {
        if (strcmp(candidates[i], name) == 0)
        {
            ranks[rank] = i;
            return true;
        }
    }    
    return false;
}

// Update preferences given one voter's ranks
void record_preferences(int ranks[])
{
    // Iterate ranks
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = i+1; j < candidate_count; j++)
        {
            int pref = ranks[i];
            int over = ranks[j];
            preferences[pref][over]++;
        }
    }
    // print_preferences_array();
    return;
}

// Record pairs of candidates where one is preferred over the other
void add_pairs(void)
{
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = i+1; j < candidate_count; j++)
        {
            if (preferences[i][j] > preferences[j][i])
            {
                pairs[pair_count].winner = i;
                pairs[pair_count].loser = j;
                pair_count++;
            }
            
            if (preferences[i][j] < preferences[j][i])
            {
                pairs[pair_count].winner = j;
                pairs[pair_count].loser = i;
                pair_count++;
            }

        }
    }
    // print_pairs_array();
    return;
}

// Sort pairs in decreasing order by strength of victory
void sort_pairs(void)
{

    // DEBUG
    // printf("Preferences array:\n");
    // print_preferences_array();
    // printf("Unsorted pairs:\n");
    // print_pairs_array();

    // Bubble Sort Algorithm for pairs
    int swaps;
    do
    {
        swaps = 0;
        int offset = 0;
        for (int i = offset; i < pair_count - 1; i++)
        {
            if (win_power(i) < win_power(i + 1))
            {
                pair tmp = pairs[i];
                pairs[i] = pairs[i+1];
                pairs[i+1] = tmp;
                swaps++;
            }
            offset++;
        }
    }
    while (swaps > 0);

    // DEBUG
    // printf("Sorted pairs:\n");
    // print_pairs_array();

    return;
}

// Lock pairs into the candidate graph in order, without creating cycles
void lock_pairs(void)
{
    // Iterate pairs
    for (int i = 0; i < pair_count; i++)
    {
        int winner = pairs[i].winner;
        int loser = pairs[i].loser;
        if (has_cycle(winner, loser) == false)
        {
            locked[winner][loser] = true;
        }
    }
    return;
}

// Print the winner of the election
void print_winner(void)
{    
    // Iterate locked
    for (int i = 0; i < candidate_count; i++)
    {
        int arrow = 0;
        for (int j = 0; j < candidate_count; j++)
        {
            if (locked[j][i] == true)
            {
                arrow++;
                break;
            }
        }
        if (arrow == 0)
        {
            printf("%s\n", candidates[i]);
            break;
        }
    }
    return;
    
}

// Get winning power
int win_power(int current_pair)
{
    int winner = pairs[current_pair].winner;
    int loser = pairs[current_pair].loser;
    int winner_votes =  preferences[winner][loser];
    int loser_votes =   preferences[loser][winner];
    return winner_votes - loser_votes;
}

int hit;

// Check if a pair will generate a cicle if locked
bool has_cycle(int win, int los)
{
    if (locked[los][win] == true)
    {
        return true;
    }

    // RECURSIVE CALL
    // Iterate loser's winner row looking for cells that are locked
    // call has_cycle, passing win (original winner) and cells's loser
    for (int i = 0; i < candidate_count; i++)
    {
        if (locked[los][i] == true && has_cycle(win, i))
        {
            return true;
        }
    }
    
    return false;
}

// Print preferences array (Debugger)
void print_preferences_array(void)
{
    for (int i = 0; i < candidate_count; i++)
    {
        printf("    |");
        for (int j = 0; j < candidate_count; j++)
        {
            printf(" %i |", preferences[i][j]);
        }
        printf("\n");
    }
}

// Print pairs array (Debugger)
void print_pairs_array(void)
{
    for (int i = 0; i < pair_count; i++)
    {
        int w = pairs[i].winner;
        int l = pairs[i].loser;

        printf("    | W: %i | ", w);
        printf("L: %i | ", l);
        printf("WP: %i | ", win_power(i));
        printf("L: %i | \n", locked[w][l]);
    }
}

