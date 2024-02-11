import java.util.Scanner;

public class Caesar {

    public static Scanner myScanner = new Scanner(System.in);

    public static Boolean isAllDigits(String key) {
        for (int i = 0, l = key.length(); i < l; i++) {
            if (!Character.isDigit(key.charAt(i))) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {

        if (args.length != 1) {
            System.out.println("Usage: java Caesar key");
            System.exit(1);
        }
        
        if(!isAllDigits(args[0])) {
            System.out.println("Usage: java Caesar key");
            System.exit(1);
        }

        // Convert string args[0] to int key
        int key = Integer.parseInt(args[0]) % 26;

        // Get plaintext string from user input
        System.out.printf("plaintext: ");
        String plaintext = myScanner.nextLine();

         // Print ciphertext (loop over plaintext)
         System.out.printf("ciphertext: ");
         for (int i = 0, l = plaintext.length(); i < l; i++) {
             
             if (Character.isLowerCase(plaintext.charAt(i))) {
                 if (plaintext.charAt(i) + key > 122) {
                    // char cipher = (char)(plaintext.charAt(i) - 26 + key);
                    System.out.print((char)(plaintext.charAt(i) - 26 + key));
                } else {
                    // char cipher = (char)(plaintext.charAt(i) + key);
                    System.out.print((char)(plaintext.charAt(i) + key));
                 }
            } else if (Character.isUpperCase(plaintext.charAt(i))) {
                if (plaintext.charAt(i) + key > 90) {
                    System.out.print((char)(plaintext.charAt(i) - 26 + key));
                } else {
                    System.out.print((char)(plaintext.charAt(i) + key));
                }
            } else {
                System.out.print(plaintext.charAt(i));
            }
        }
        System.out.printf("\n");
    }
}
