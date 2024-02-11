import java.util.Scanner;
import java.util.HashMap;

public class Cash {

    private static Scanner myScanner = new Scanner(System.in);

    public static HashMap<String, Integer> isInt(String str) {

        HashMap<String, Integer> myMap = new HashMap<String, Integer>();
        myMap.put("intVal", 0);
        myMap.put("isInt", 0);

        if (str == null || str.equals("")) {
            return myMap;
        }

        try {
            myMap.put("intVal", Integer.parseInt(str));
            myMap.put("isInt", 1);
            return myMap;
        } catch (NumberFormatException e) {
            return myMap;
        }
    }

    public static int getInt(String str) {

        String userInput;
        int intVal;
        int isInt;

        do {
            System.out.printf(str);
            userInput = myScanner.nextLine();
            intVal = isInt(userInput).get("intVal");
            isInt = isInt(userInput).get("isInt");
        }
        while (isInt == 0);

        return intVal;
    }

    public static int getCents() {
        int cents;
        do {
            cents = getInt("Change owed: ");
        }
        while (cents < 0);
        return cents;
    }

    public static int calculateQuarters(int cents) {
        return cents / 25;
    }
    public static int calculateDimes(int cents) {
        return cents / 10;
    }
    public static int calculateNickels(int cents) {
        return cents / 5;
    }
    public static int calculatePennies(int cents) {
        return cents;
    }

    public static void main(String[] args) {

        // Ask how many cents the customer is owed
        int cents = getCents();

        // Calculate the number of quarters to give the customer
        int quarters = calculateQuarters(cents);
        cents = cents - quarters * 25;

        // Calculate the number of dimes to give the customer
        int dimes = calculateDimes(cents);
        cents = cents - dimes * 10;

        // Calculate the number of nickels to give the customer
        int nickels = calculateNickels(cents);
        cents = cents - nickels * 5;

        // Calculate the number of pennies to give the customer
        int pennies = calculatePennies(cents);
        cents = cents - pennies * 1;

        // Sum coins
        int coins = quarters + dimes + nickels + pennies;

        // Print total number of coins to give the customer
        System.out.println(coins);
    }

}