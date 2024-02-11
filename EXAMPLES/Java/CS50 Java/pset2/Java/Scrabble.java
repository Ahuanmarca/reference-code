import java.util.Scanner;

public class Scrabble {

    // static keyword makes this things available inside the methods
    private static final int[] POINTS = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};
    private static Scanner myScanner = new Scanner(System.in);

    public static int compute_score(String word) {

        int score = 0;
        String l_word = word.toLowerCase();

        for (int i = 0; i < word.length(); i++) {
            char letter = l_word.charAt(i);
            if (Character.isLetter(letter)) {
                int value = Scrabble.POINTS[(int) letter - 97];
                score += value;
            }
        }
        return score;
    }


    public static void main(String[] args) {

        System.out.printf("Player 1: ");
        String word1 = myScanner.nextLine();
        System.out.printf("Player 2: ");
        String word2 = myScanner.nextLine();
        
        int score1 = compute_score(word1);
        int score2 = compute_score(word2);

        if (score1 > score2) {
            System.out.println("Player 1 wins!");
        } else if (score1 < score2) {
            System.out.println("Player 2 wins!");
        } else {
            System.out.println("Tie!");
        }
    }
}
