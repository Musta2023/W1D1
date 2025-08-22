from game import Game
def get_user_menu_choice():
    print("\nMenu")
    print("play a new game: (1)")
    print("show score (2)") 
    print("Quit (X)")

    digit_map = str.maketrans("٠١٢٣٤٥٦٧٨٩", "0123456789")
    choice=input("enter you choice: ").lower().strip()
    choice = choice.translate(digit_map)
    if choice not in ["1","2","x"]:
        print("please choose 1 or 2 or X from the menu")
        return None
    else:
        return choice
    
def print_results(results):
    print("=======* the game's result *========")
    print(f"you win {results['win']}")
    print(f"you loose {results['loose']}")
    print(f"you draw {results['draw']}")
    print("=======*good game!*=======")

def main():
    results = {"win": 0, "loose": 0, "draw": 0}
    while True:
        choice = get_user_menu_choice()
        if choice is None:
            continue
        if choice == "1":
            game = Game()
            result = game.play()
            results[result] += 1
            
        elif choice == "2":
            print_results(results)
        elif choice == "x":
            print_results(results)
            break

if __name__ == "__main__":
    main()
     

