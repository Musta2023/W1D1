import random
class Game:
    options=["rock","paper","scissors"]
    def __init__(self):
       self.user_input = None
       self.computer_input = None
    def get_user_items(self):
      while self.user_input not in Game.options:
          self.user_input = input("choose rock, paper or scissor: ")
          if self.user_input in Game.options:
              return self.user_input
          print("Invalid input. Please choose rock, paper or scissor.")
    def get_computer_items(self):
       self.computer_input=random.choice(Game.options)
       return self.computer_input
    def get_game_result(self, user_input, computer_input):
      while True:
         if user_input==computer_input:
            return "draw"
         elif user_input=="rock" and computer_input=="scissors" or\
              user_input=="paper" and computer_input=="rock" or\
              user_input=="scissors" and computer_input=="paper":
            return "win"
         else:
            return "loose"

    def play(self):
       user= self.get_user_items()
       comp=self.get_computer_items()
       result=self.get_game_result(user,comp)
       print(f"You selected {user}. The computer selected {comp}. You {result}!")
       return result

