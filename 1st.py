def add(a,b):
    return a+b
def sub(a,b):
    return a-b
def mul(a,b):
    return a*b
def div(a,b):
    return a/b
print ("======Caluclator====")
print ("1.Addition")
print ("2.Subtraction")
print ("3.Multiplication")
print ("4.Dividion")
choice = int (input("ENTER THE NUMBER :"))
if choice > 4:
    print ("Enter the below 4 options")
if choice == 1:
    print (add(3,4))
elif choice == 2:
    print (sub(6,10))
elif choice == 3:
    print (mul(23,56))
elif choice == 4:
    print (div(5,6))
else:
    print ("Thank you")

