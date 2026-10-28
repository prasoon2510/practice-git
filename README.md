# practice-git
Demo Repository to practice git basic commands
Python String Operations Menu
Project Overview
This project is a beginner-friendly Python program that provides a menu of string operations. The user selects an operation, and the program performs it on a string.

The project contains 15 string operations implemented as separate functions.
String Operations
No.	Operation	Python method or logic
1	Convert to Uppercase	upper()
2	Convert to Lowercase	lower()
3	Capitalize String	capitalize()
4	Title Case	title()
5	Reverse String	String slicing: [::-1]
6	Count Characters	len()
7	Count a Specific Character	count()
8	Find a Substring	find()
9	Replace a Substring	replace()
10	Remove Leading and Trailing Whitespace	strip()
11	Check Starting Characters	startswith()
12	Check Ending Characters	endswith()
13	Check Palindrome	String comparison and slicing
14	Count Vowels	Loop and character comparison
15	Count Consonants	isalpha() and character comparison


Requirements
- Python 3
- A code editor or terminal, such as VS Code
How to Run
1. Save the Python program in a file, for example, string_utils.py.
2. Open a terminal in the folder containing the file.
3. Run:
   python string_utils.py
4. Enter a menu choice from 0 to 15.
5. Follow any prompts displayed by the program.
Menu
===== STRING OPERATIONS MENU =====
1. Convert to Uppercase
2. Convert to Lowercase
3. Capitalize String
4. Title Case
5. Reverse String
6. Count Characters
7. Count a Specific Character
8. Find a Substring
9. Replace a Substring
10. Remove Leading and Trailing Whitespace
11. Check Starting Characters
12. Check Ending Characters
13. Check Palindrome
14. Count Vowels
15. Count Consonants
0. Exit
Concepts Practised
- Defining and calling functions
- Passing arguments and returning values
- Taking user input with input()
- Using conditional statements (if, elif, and else)
- Using loops
- Working with Python strings and built-in string methods
- Displaying a menu and selecting an operation
Notes and Possible Improvements
- The current menu uses sample strings for several operations. It can be improved by asking the user to enter a string for each selected operation.
- Option 8 should call find_char() rather than char() to find a substring.
- In checking(), assign the lowercase result back to a variable (for example, valuess = valuess.lower()) if the check should ignore letter case.
- For vowel counting, use vowels = "aeiou" without commas or spaces.
- split() does not change a string in place. For palindrome checking, decide whether spaces and letter case should be ignored, then normalize the string before comparing it with its reverse.
- Functions that print an error message may return None; returning a message can make their results easier to use with print().
Example
Enter the Name: Charan
===== STRING OPERATIONS MENU =====
1. Convert to Uppercase
...
Enter the Choice to perform the string operations: 1
HELLO
