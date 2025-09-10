import os,sqlite3,hashlib,hmac
from getpass import getpass
DB_PATH="auth.db"
PBKDF2_ITER=150000
def init_db():
    con=sqlite3.connect(DB_PATH)
    cur=con.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS users(username TEXT PRIMARY KEY,salt TEXT NOT NULL,hash TEXT NOT NULL)")
    con.commit()
    return con
def hash_password(password: str,salt_hex: str|None=None)->tuple[str,str]:
    salt=os.urandom(16) if salt_hex is None else bytes.fromhex(salt_hex)
    dk=hashlib.pbkdf2_hmac("sha256",password.encode("utf-8"),salt,PBKDF2_ITER)
    return salt.hex(),dk.hex()
def verify(password: str,salt_hex: str,hash_hex: str)->bool:
    salt=bytes.fromhex(salt_hex)
    dk=hashlib.pbkdf2_hmac("sha256",password.encode("utf-8"),salt,PBKDF2_ITER)
    return hmac.compare_digest(dk.hex(),hash_hex)
def get_user(cur,username: str):
    cur.execute("SELECT username,salt,hash FROM users WHERE username=?",(username,))
    return cur.fetchone()
def create_user(con,username: str,password: str)->bool:
    if not username.strip():
        print("Username cannot be empty.")
        return False
    cur=con.cursor()
    if get_user(cur,username):
        print("Username already exists.")
        return False
    salt_hex,hash_hex=hash_password(password)
    cur.execute("INSERT INTO users(username,salt,hash) VALUES (?,?,?)",(username,salt_hex,hash_hex))
    con.commit()
    return True
def authenticate(cur,username: str,password: str)->str:
    row=get_user(cur,username)
    if not row:
        return "no_user"
    _,salt_hex,hash_hex=row
    return "ok" if verify(password,salt_hex,hash_hex) else "bad_password"
def seed_if_empty(con):
    cur=con.cursor()
    cur.execute("SELECT COUNT(*) FROM users")
    if cur.fetchone()[0]==0:
        for u,p in {"hamid":"pass123","mustapha":"pass444","khalid":"pass111"}.items():
            create_user(con,u,p)
def main():
    con=init_db()
    seed_if_empty(con)
    logged_in=None
    while True:
        action=input("select login or exit : ").strip().lower()
        if action=="exit":
            print("you are out!!")
            break
        elif action=="login":
            username=input("enter your username: ").strip()
            password=getpass("enter your password: ")
            status=authenticate(con.cursor(),username,password)
            if status=="ok":
                print(f"Hello, welcome back {username}, you are logged in!!!")
                logged_in=username
            elif status=="no_user":
                choice=input("you are not signed up yet, do you want to sign up (yes/no) ").strip().lower()
                if choice=="yes":
                    while True:
                        new_username=input("please enter your username: ").strip()
                        if not new_username:
                            print("Username cannot be empty.")
                            continue
                        if get_user(con.cursor(),new_username):
                            print("this username already exists!!")
                            continue
                        break
                    new_password=getpass("please enter your password: ")
                    if create_user(con,new_username,new_password):
                        print(f"hello {new_username}, the account has been created successfully!!")
                else:
                    print("return to main menu..;")
            else:
                print("invalid password")
        else:
            print("invalid combination, please login or exit!!!!")
if __name__=="__main__":
    main()
