import java.util.Scanner;
import java.util.HashMap;

public class Credit {

    private static Scanner myScanner = new Scanner(System.in);

    public static HashMap<String, Long> isLong(String str) {

        HashMap<String, Long> myMap = new HashMap<String, Long>();
        myMap.put("longVal", 0L);
        myMap.put("isLong", 0L);

        if (str == null || str.equals("")) {
            return myMap;
        }

        try {
            myMap.put("longVal", Long.parseLong(str));
            myMap.put("isLong", 1L);
            return myMap;
        } catch (NumberFormatException e) {
            return myMap;
        }
    }

    public static long getLong(String str) {

        String userInput;
        long longVal;
        long isLong;

        do {
            System.out.printf(str);
            userInput = myScanner.nextLine();
            longVal = isLong(userInput).get("longVal");
            isLong = isLong(userInput).get("isLong");
        }
        while (isLong == 0L);
        return longVal;
    }

    static public int countDigits(long number) {
        long n = number;
        int count = 0;
        while (n != 0) {
            n = n/10;
            count++;
        }
        return count;
    }

    static public int getFirstDigits(long number, int digits) {
        long divider = (long) Math.pow(10, digits-2);
        long firstDigits = number / divider;
        return (int) firstDigits;
    }

    static public String getCardType(int digits, int fd) {
        if (digits == 15 && (fd == 34 || fd == 37)) {
            return "AMEX";
        }
        else if (digits == 16 && (fd >= 51 &&  fd <= 55)) {
            return "MASTERCARD";
        }
        else if (digits == 16 && ((int) fd/10 == 4)) {
            return "VISA";
        }
        else if (digits == 13 && ((int) fd/10 == 4)) {
            return "VISA";
        }
        else {
            return "INVALID";
        }
    }

    static public boolean luhn(long number, int digits) {

        int total = 0;

        for (int i = 1; i <= digits; i++) {

            // Slice number
            long divider = (long) Math.pow(10, i - 1);
            long currentNumber = (number % (divider * 10)) / divider;

            if (i % 2 == 0) {
                int duplicated = (int) currentNumber * 2;
                int tens = duplicated / 10;
                int ones = duplicated % 10;
                total += (tens + ones);
            } else {
                total += currentNumber;
            }
        }
        return total % 10 == 0;
    }

    public static void main(String[] args) {

        // Get number from user
        // long number = 4003600000000014L;
        long number = getLong("Number: ");

        // Count digits
        int digits = countDigits(number);

        // Validate number of digits
        if (!(digits == 13 || digits == 15 || digits == 16)) {
            System.out.println("INVALID");
            System.exit(0);
        }

        // Get first two digits from the number
        int fd = getFirstDigits(number, digits);

        // Validate first two digits
        if (!(fd == 34 || fd == 37 || (fd >= 51 && fd <= 55) || (int) fd/10 == 4)) {
            System.out.println("INVALID");
            System.exit(0);
        }

        // Validate with Luhn's algorithm
        if (!(luhn(number, digits))) {
            System.out.println("INVALID");
            System.exit(0);
        }

        System.out.println(getCardType(digits, fd));
    }
}


/*
* For testing
* 4003600000000014 VISA
* 378282246310005 AMEX
* 371449635398431 AMEX
* 30569309025904 DINERS CLUB (INVALID)
* 5555555555554444 MASTERCARD
* 5105105105105100 MASTERCARD
* 4012888888881881 VISA
* 4222222222222 VISA
* 4567890123456 (INVALID)
*/