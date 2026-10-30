import random
secret_number = random.randint(1, 100)
attempts = 0
while True:
    guess = int(input("Guess a number between 1 and 100: "))
    attempts += 1

    if guess > secret_number:
        print("Too High! Try again.")

    elif guess < secret_number:
        print("Too Low! Try again.")

    else:
        print("Congratulations! You won!")
        print("Number of attempts:", attempts)
        break
