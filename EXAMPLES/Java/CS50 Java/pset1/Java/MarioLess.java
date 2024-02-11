import java.util.Scanner;
import java.util.HashMap;
/*
* Java solution for CS50x pset 1: Mario Less
* 2022-09-14
* isInt() checks if a string represents and int, returns boolean value
* getInt() prompts user, reprompts until a valid int is provided (like CS50's get_int)
* Java provides an equivalent for get_string with the Scanner utility
*/

public class MarioLess {

    private static Scanner myScanner = new Scanner(System.in);

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


    public static void main(String[] args) {

        // Get height from user
        int height = 0;
        do {
            height = getInt("Height: ");
        }
        while (height < 1 || height > 8);

        // Print rows
        for (int row = 0; row < height; row++) {
            // Greater row == less spaces
            for (int spaces = height - row - 1; spaces > 0; spaces--) {
                System.out.printf(" ");
            }
            // Greater row == more hashes
            for (int blocks = 0; blocks < row + 1; blocks++) {
                System.out.printf("#");
            }
            System.out.printf("\n");
        }
    }
}