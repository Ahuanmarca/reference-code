import random;
test_dict = ["plank","ghost","derby","jumps","winch"]
# only works for words with no repeat letters

counter = 0;

def check(user_word, secret_word):
    result = []

    for i in range(5):
        if user_word[i]==secret_word[i]:
            result.append('g')
        elif user_word[i] in secret_word:
            result.append('y')
        else:
            result.append('b')
    
    return result

random_word = test_dict[random.randint(0,4)]

while counter < 6:
    guess = input("Your guess: ")
    print(check(guess, random_word))
    counter +=1
    if guess == random_word:
        print("Congratulations!")
        break

