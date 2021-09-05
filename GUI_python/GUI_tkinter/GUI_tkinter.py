from tkinter import *
# from PIL import Image,ImageTk
yash = Tk()
# yash.minsize(300,100)
# yash.maxsize(1000,700)
# yash = Label(text="gui by yash lodhi")
# yash.pack()
# yash2 = PhotoImage(file="art.png")
# yash3 = Label(image=yash2)
# yash3.pack()
# yash2=Label(text="this is a sample model test for practice",bg="black",fg="white",padx=50,pady=50,font="comicsansms 9 bold",borderwidth=3,relief=GROOVE)
# yash2.pack()
yash.title("tkinter tutorial")
yash.geometry("600x400")

# f1=Frame(background="blueviolet",borderwidth=6,relief=SUNKEN)
# f1.pack(side=LEFT,fill=Y)
# f2=Frame(background="blueviolet",borderwidth=6,relief=SUNKEN)
# f2.pack(side=TOP,fill=X)

# l = Label(f1, text="Project Tkinter - Pycharm")
# l.pack( pady=142)

# l = Label(f2, text="Welcome to sublime text", font="Helvetica 16 bold", fg="red", pady=22)
# l.pack()


# def hello():
#     print("Hello tkinter Buttons")

# def name():
#     print("Name is yash")

# def age():
#     print("I am 14 year old")

# def thankyou():
#     print("thankyou for using") 

# frame = Frame( borderwidth=6, bg="grey", relief=SUNKEN)
# frame.pack(side=LEFT, anchor="nw")

# b1 = Button(frame, fg="red", text="Print now", command=hello)
# b1.pack(side=LEFT, padx=23)

# b2 = Button(frame, fg="red", text="Tell me name now", command=name)
# b2.pack(side=LEFT, padx=23)

# b3 = Button(frame, fg="red", text="Tell me age now",command=age)
# b3.pack(side=LEFT, padx=23)

# b4 = Button(frame, fg="red", text="greetings",command=thankyou)  
# b4.pack(side=LEFT, padx=23)

def getvals():
    print(f"The value of username is {uservalue.get()}")
    print(f"The value of password is {passvalue.get()}")

user = Label( text="Username")
password = Label( text="Password")
user.grid()
password.grid(row=1)

# Variable classes in tkinter
# BooleanVar, DoubleVar, IntVar, StringVar

uservalue = StringVar()
passvalue = StringVar()

userentry = Entry( textvariable = uservalue)
passentry = Entry( textvariable = passvalue)

userentry.grid(row=0, column=1)
passentry.grid(row=1, column=1)

Button(text="Submit", command=getvals).grid()




yash.mainloop()