def palindrome(n):

    
    reverese = 0
    original = n

    while n > 0:
        digit = n % 10
        reverse = reverese * 10 + digit 
        n //=10

    if reverese == original:
        print("Palindrome")
    else:
        print("Not a palindrome")        
palindrome(121)
