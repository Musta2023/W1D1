from sqlalchemy import Integer, String, Column
from sqlalchemy.orm import create_session, declarative_base
users={"hamid":"pass123","mustapha":"pass444","khalid":"pass111"}
logged_in=None
while True:
    choose_act=input("select login or exit : ").strip().lower()
    if choose_act=="exit":
        print("you are out!!")
        break
    elif choose_act=="login":
        username=input("enter you username: ").strip()
        password=input("enter your password: ").strip()
        if username in users and users[username]==password:
            print(f"Hellow, well comaback {username}, you are logged in!!!")
            logged_in=username
        elif username not in users:
            choose_act2=input("you are not signed up yet, do you want to sign up (yes/no)").strip().lower()
            if choose_act2=="yes":
                while True:
                    new_username=input("please enter you username: ").strip()
                    if new_username in users:
                        print("this user is already existe!!")
                    elif not new_username:
                        print("Username cannot be empty.")
                    else:
                        break
                new_password=input("please enter your password: ").strip()
                users[new_username]=new_password
                print(f"hello {new_username}, the account has been created successfully!!")
            else:
                print("return to main menu..;")
        else:
            print("invalid password")
    else:
        print("invalid combination, please login or exit!!!!")
    
