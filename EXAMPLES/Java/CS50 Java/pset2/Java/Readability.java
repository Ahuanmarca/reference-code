import java.util.Scanner;
import java.util.HashMap;

public class Readability {

    private static Scanner myScanner = new Scanner(System.in);

    public static HashMap<String, Integer> getTextInfo(String text) {

        HashMap<String, Integer> counters = new HashMap<String, Integer>();
        counters.put("letters", 0);
        counters.put("words", 1);
        counters.put("sentences", 0);

        for (int i = 0, l = text.length(); i < l; i++) {
            if (Character.isAlphabetic(text.charAt(i))) {
                counters.put("letters", counters.get("letters") + 1);
            }
            
            if ((int) text.charAt(i) == 32) { // ASCII for blank space
                counters.put("words", counters.get("words") + 1);
            }

            if (text.charAt(i) == '.' || text.charAt(i) == '!' || text.charAt(i) == '?') {
                counters.put("sentences", counters.get("sentences") + 1);
            }
        }
        return counters;
    }

    public static void main(String[] args) {

        System.out.printf("Text: ");
        String text = myScanner.nextLine();

        HashMap<String, Integer> textInfo = getTextInfo(text);
        float letters = (float) textInfo.get("letters");
        float words = (float) textInfo.get("words");
        float sentences = (float) textInfo.get("sentences");

        // Average number of letters per 100 words
        float L = letters * (100 / words);
        
        // Average number of sentences per 100 words
        float S = sentences * (100 / words);

        float grade = (float) (0.0588 * L - 0.296 * S - 15.8);

        System.out.println(grade);
    }
}
