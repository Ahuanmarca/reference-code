// package pset3.Java;
import java.util.Scanner;
import java.util.HashMap;

public class Runoff {

    // Max voters and candidates
    static final int MAX_VOTERS = 100;
    static final int MAX_CANDIDATES = 9;

    // preferences[i][j] is jth preference for voter i
    static int[][] preferences = new int[MAX_VOTERS][MAX_CANDIDATES];

    // Array of candidates
    static Candidate[] candidates;

    // Number of voters and candidates
    static int voterCount;
    static int candidateCount;

    public static void main(String[] args) {

        // Allocate memory for candidates
        candidates = new Candidate[MAX_CANDIDATES];

        // Check for invalid usage
        if (args.length < 1) {
            System.out.println("Usage: java Runoff [candidate ...]");
            System.exit(1);
        }

        // Populate array of candidates
        candidateCount = args.length;
        if (candidateCount > MAX_CANDIDATES) {
            System.out.println("Maximum number of candidstes is " + MAX_CANDIDATES);
            System.exit(2);
        }
        for (int i = 0; i < candidateCount; i++) {
            candidates[i] = new Candidate(args[i], 0, false);
            // System.out.println(candidates[i].name);
        }

        voterCount = Helpers.getInt("Number of voters: ");
        if (voterCount > MAX_VOTERS) {
            System.out.println("Maximum number of voters is " + MAX_VOTERS);
            System.exit(3);
        }

        // Keep querying for votes
        for (int i = 0; i < voterCount; i++) {
            // Query for each rank
            for (int j = 0; j < candidateCount; j++) {
                String name = Helpers.getString("Rank " + (j + 1) + ": ");

                // Record vote, unless it's invalid
                if (Prototypes.vote(i, j, name) == false) {
                    System.out.println("Invalid vote.");
                    System.exit(4);
                }
            }
            System.out.printf("\n");
        }

        // Keep holding runoffs until winner exists
        while (true) {
            // Calculate votes fiven remaining candidates
            Prototypes.tabulate();

            // Check if election has been won
            Boolean won = Prototypes.printWinner();
            if (won == true) {
                break;
            }

            // Eliminate last-place candidates
            int min = Prototypes.findMin();
            Boolean tie = Prototypes.isTie(min);

            // If tie, everyone wins
            if (tie == true) {
                for (int i = 0; i < candidateCount; i++) {
                    if (candidates[i].eliminated == false) {
                        System.out.println(candidates[i].name);
                    }
                }
                break;
            }

            // Eliminate anyone with minimum number of votes
            Prototypes.eliminate(min);

            // Reset vote counts back to zero
            for (int i = 0; i < candidateCount; i++) {
                candidates[i].votes = 0;
            }
        }
        System.exit(0);
    }
}


// Candidates have name, vote count, eliminated status
class Candidate {
    String name;
    int votes;
    Boolean eliminated;

    Candidate(String name, int votes, Boolean eliminated) {
        this.name = name;
        this.votes = votes;
        this.eliminated = eliminated;
    }
}


// Functions
class Prototypes {

    // Record preference if vote is valid
    public static Boolean vote(int voter, int rank, String name) {
        // Linear search of candidate's name
        for (int i = 0; i < Runoff.candidateCount; i++) {
            if (name.compareTo(Runoff.candidates[i].name) == 0) {
                Runoff.preferences[voter][rank] = i;
                return true;
            }
        }
        return false;
    }

    // Tabulate votes for non-eliminated candidates
    public static void tabulate() {

        // Loop over voters
        for (int i = 0; i < Runoff.voterCount; i++) {
            for (int j = 0; j < Runoff.candidateCount; j++) {
                if (Runoff.candidates[Runoff.preferences[i][j]].eliminated == false) {
                    Runoff.candidates[Runoff.preferences[i][j]].votes++;
                    break;
                }
            }
        }
        return;
    }

    // Print the winner of the election, if there is one
    public static Boolean printWinner() {
        // Find the most voted candidate
        int bestScore = 0;
        int winner = 0; // To silence "may not have been initialized" warning
        for (int i = 0; i < Runoff.candidateCount; i++) {
            if (Runoff.candidates[i].votes > bestScore) {
                bestScore =  Runoff.candidates[i].votes;
                winner = i;
            }
        }

        // If most voted has more than 50% of votes, declare winner
        if (bestScore > Runoff.voterCount / 2) {
            System.out.println(Runoff.candidates[winner].name);
            return true;
        }

        return false;
    }

    // Return the minimum number of votes any remaining candidate has
    public static int findMin() {
        int lowest = Runoff.voterCount;
        for (int i = 0; i < Runoff.candidateCount; i++) {
            if (Runoff.candidates[i].votes < lowest && Runoff.candidates[i].eliminated == false) {
                lowest = Runoff.candidates[i].votes;
            }
        }
        return lowest;
    }

    // Return true if the election is tied between all candidates, dalse otherwise
    public static Boolean isTie(int min) {
        for (int i = 0; i < Runoff.candidateCount; i++) {
            if (Runoff.candidates[i].votes != min && Runoff.candidates[i].eliminated == false) {
                return false;
            }
        }
        return true;
    }

    // Eliminate the candidate (or candidates) in last place
    public static void eliminate(int min) {
        for (int i = 0; i < Runoff.candidateCount; i++) {
            if (Runoff.candidates[i].votes == min && Runoff.candidates[i].eliminated == false) {
                Runoff.candidates[i].eliminated = true;
            }
        }
        return;
    }

}


class Helpers {

    public static Scanner myScanner = new Scanner(System.in);

    public static String getString(String prompt) {
        System.out.printf(prompt);
        String str = myScanner.nextLine();
        return str;
    }

    // Checks if a string represents an int
    // by trying to use Integer.parseInt()
    // Returns HashMap with int value and boolean (just a second int)
    public static HashMap<String, Integer> isInt(String str) {

        HashMap<String, Integer> myMap = new HashMap<String, Integer>();
        myMap.put("intValue", 0);
        myMap.put("isInteger", 0);

        if (str == null || str.equals("")) {
            return myMap;
        }

        try {
            myMap.put("intValue", Integer.parseInt(str));
            myMap.put("isInteger", 1);
            return myMap;
        } catch (NumberFormatException e) {
            return myMap;
        }
    }

    // Promts for int, reprompts if input is invalid
    public static int getInt(String str) {

        String userInput;
        int isInt;
        int intVal;

        do {
            System.out.printf(str);
            userInput = myScanner.nextLine();
            isInt = (isInt(userInput)).get("isInteger");
            intVal = (isInt(userInput)).get("intValue");
        }
        while (isInt == 0);

        return intVal;
    }
}