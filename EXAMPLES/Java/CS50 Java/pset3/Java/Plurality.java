// Plurality.java 2022-09-21
// package pset3.Java;

import java.util.Scanner;
import java.util.HashMap;

public class Plurality {

    public static Scanner myScanner = new Scanner(System.in);

    // Max number of candidates
    private static final int MAX = 9;

    // Number of candidates
    private static int candidateCount;

    // Declare an array of candidates
    static Candidate[] candidates;

    public static Boolean vote(String name) {
        // Linear search of candidate's name
        for (int i = 0; i < candidateCount; i++) {
            if (name.compareTo(candidates[i].name) == 0) {
                candidates[i].votes++;
                return true;
            }
        }
        return false;
    }

    public static void printWinner() {
        int mostVotes = 0;

        // Linear search of highest score
        for (int i = 0; i < candidateCount; i++) {
            if (candidates[i].votes > mostVotes) {
                mostVotes = candidates[i].votes;
            }
        }

        // Print candidates matching highest score
        for (int i = 0; i < candidateCount; i++) {
            if (candidates[i].votes == mostVotes) {
                System.out.println(candidates[i].name);
            }
        }        
    }

    public static void main(String[] args) {

        // Allocate memory for MAX objects
        candidates = new Candidate[MAX];

        // Check for invalid usage
        if (args.length < 1) {
            System.out.println("Usage: java Plurality [candidate ...]");
            System.exit(1);
        }

        // Populate array of candidates
        candidateCount = args.length;
        if (candidateCount > MAX) {
            System.out.println("Maximum number of candidates is " + MAX);
            System.exit(2);
        }
        for (int i = 0; i < candidateCount; i++) {
            candidates[i] = new Candidate(args[i], 0);
        }
        
        int voterCount = Helpers.getInt("Number of voters: ");

        // Loop over all voters
        for (int i = 0; i < voterCount; i++) {
            String name = Helpers.getString("Vote: ");

            // Check for invalid vote
            if (vote(name) == false) {
                System.out.println("Invalid vote.");
            }
        }

        // Display the winner of the election
        printWinner();
    }
}


// Candidates have name and vote count
class Candidate {
    String name;
    int votes;

    Candidate(String name, int votes) {
        this.name = name;
        this.votes = votes;
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