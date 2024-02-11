import java.util.Scanner;
import java.util.HashMap;

/*
* Testing:
* 
* java Substitution YTNSHKVEFXRBAUQZCLWDMIPGJO
* plaintext:  HELLO
* ciphertext: EHBBQ
* 
* java Substitution VCHPRZGJNTLSKFBDQWAXEUYMOI
* plaintext:  hello, world
* ciphertext: jrssb, ybwsp
* 
*/


public class Substitution {

    public static int KEY_LENGTH = 26;
    public static Scanner myScanner = new Scanner(System.in);

    public static Boolean validateKey(String key) {

        // HashMap with 26 Booleans to remember found characters by their ASCII codes
         HashMap<Integer, Boolean> foundCharacters = new HashMap<Integer, Boolean>();
         for (int i = 0; i < KEY_LENGTH; i++) {
            foundCharacters.put(i+97, false);
         }

         int uniqueCharacters = 0;

         for (int i = 0, l = key.length(); i < l; i++) {
            
            char currentCharacter = Character.toLowerCase(key.charAt(i));

            // Invalid characters (non alphabetic)
            if (!Character.isAlphabetic(currentCharacter)) {
                // System.out.println("Invalid 1");
                return false;
            }
            
            // Repeated characters (already in foundCharacters HashMap)
            if (foundCharacters.get((int) currentCharacter)) {
                // System.out.println("Invalid 2");
                return false;
            } else {
                foundCharacters.put((int) currentCharacter, true);
                uniqueCharacters++;
            }
            
        }

        // 26 unique characters
        if (uniqueCharacters != KEY_LENGTH) {
            // System.out.println("Invalid 3");
            return false;
        }

        return true;
    }

    public static void main(String[] args) {

        // Correct number of arguments
        if (args.length != 1) {
            System.out.println("Usage: java Substitution key");
            System.exit(1);
        }

        // Key is valid (26 unique alphabetic)
        if (!validateKey(args[0])) {
            System.out.println("Invalid key");
            System.exit(1);
        }

        // Stores key in a variable
        String key = args[0];

        // Gets plaintext from user input
        System.out.printf("plaintext: ");
        String plaintext = myScanner.nextLine();

        // Print ciphertext
        // Use ASCII values of the plaintext chars to index the key        
        System.out.printf("ciphertext: ");
        for (int i = 0, l = plaintext.length(); i < l; i++) {
            if (Character.isLowerCase(plaintext.charAt(i))) {
                int cipherIndex = Character.toLowerCase(plaintext.charAt(i))-97;
                System.out.print(Character.toLowerCase(key.charAt(cipherIndex)));
            } else if (Character.isUpperCase(plaintext.charAt(i))) {
                int cipherIndex = Character.toLowerCase(plaintext.charAt(i))-97;
                System.out.print(Character.toUpperCase(key.charAt(cipherIndex)));
            } else {
                System.out.print(plaintext.charAt(i));
            }
         }
         System.out.printf("\n");
    }

}
