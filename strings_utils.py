
#1
def uppercase(word):
    return word.upper()
#2
def lowercase(words):
    return words.lower()
#3
def captilize(char):
    return char.capitalize()
#4
def Title_case(value):
    return value.title()
#5
def reverse(title):
    return title[::-1]
#6
def count_char(values):
    return len(values)
#7
def char(values,target):
    if target in values :
     return values.count(target)
    else:
        print ("Not Matching")
#8
def find_char(values,target2):
    if target2 in values:
     return values.find(target2)
    else:
        print ("No Charcter found")
#9
def replace_char(valiues,value,new_value):
    if value in valiues and new_value not in valiues:
        return valiues.replace(value,new_value)
    else:
        print ("ERROR")
#10
def whitespace(values):
    return values.strip()
#11
def checking(valuess,value):
    valuess.lower()
    if value not in valuess:
        print ("Not Matching")
    else:
     return valuess.startswith(value)
#12
def checking_ending(values,target):
    if target not in values:
        print ("Not found")
    else:
     return values.endswith(target)
#13
def check_palindrome(value):
    value.split()
    if value == value[::-1]:
        print ("Palindrome")
    else:
        print ("Not Palindrome")
#14.
def owels(char):
    character = char.lower()
    ovels = "a, e, i, o, u"
    count = 0
    for letter in character:
        if letter in ovels:
            count +=1
    return count
#15.
def constants(char):
    charcter = char.lower()
    ovels = "a,e,i,o,u"
    count = 0
    for letters in charcter:
        if letters.isalpha() and letters not in ovels:
            count += 1
    return count

name = input("Enter the Name:")
print("===== STRING OPERATIONS MENU =====")
print("1. Convert to Uppercase")
print("2. Convert to Lowercase")
print("3. Capitalize String")
print("4. Title Case")
print("5. Reverse String")
print("6. Count Characters")
print("7. Count a Specific Character")
print("8. Find a Substring")
print("9. Replace a Substring")
print("10. Remove Leading and Trailing Whitespace")
print("11. Check Starting Characters")
print("12. Check Ending Characters")
print("13. Check Palindrome")
print("14. Count Vowels")
print("15. Count Consonants")
print("0. Exit")
choice =  int (input('Enter the Choice to perform the string operations:'))
if choice > 15:
    print ("Please Enter the Choice Between the 0-15 ")
elif choice == 1:
    print (uppercase("hello"))
elif choice == 2:
    print (lowercase("Hello World"))
elif choice == 3:
    word = input ('Enter the Word to Captilize:')
    print (captilize(word))
elif choice == 4:
    print (Title_case("welcome to finmkt!"))
elif choice == 5:
    word1 = input("Enter the Word to Revrse:")
    print (reverse(word1))
elif choice == 6:
    print (count_char("hello"))
elif choice == 7:
    word2 = input("Enter the word to to find the character: ")
    target1 = input ('Enter the specific word to find :')
    print (char(word2,target1))
elif choice == 8:
      word3 = input("Enter the word to to find the character: ")
      target2 = input ('Enter the specific word to find :')
      print (char(word3,target2))
elif choice == 9:
    print (replace_char("hello","e","l"))
elif choice == 10:
    print (whitespace("Hello World!"))
elif choice == 11:
    print (checking("Hello","h"))
elif choice == 12:
    print (checking_ending("Mahesh Babu","u"))
elif choice == 13:
    print (check_palindrome("madam"))
elif choice == 14:
    print (owels("hello"))
elif choice == 15:
    print (constants("charan"))
else :
    print ("Program Exiting.........")


