def add(a,b):
<<<<<<< HEAD
    result = a+b
    print (result)
def sub (c,d):
    return c-d
def mul(e,f):
    return e*f
def div(g,h):
    return g/h
add(23,45)
print (sub(45,56))
print (mul(78,89))
print (div(23,4))
=======
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

>>>>>>> 1508ae3d40c315788850c11b8cebdc1905436d11
