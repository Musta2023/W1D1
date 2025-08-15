######## ------ Exercise 1------ ########
# >>> 3 <= 3 < 9  :True

# >>> 3 == 3 == 3  :True

# >>> bool(0)  :False

# >>> bool(5 == "5") :False

# >>> bool(4 == 4) == bool("4" == "4"): True

# >>> bool(bool(None)): False

# x = (1 == True): True
# y = (1 == False): False
# a = True + 4: 5
# b = False + 10: 10

# print("x is", x): x is True
# print("y is", y): y is False
# print("a:", a): a: 5
# print("b:", b): b: 10
######## ------ Exercise 2------ ########
longest_sentence=input("Enter a sentence without the letter A: ")
while "a" in longest_sentence.lower():
    print("Oops, the sentence contains the letter A")
    longest_sentence = input("Please enter a sentence without the letter A: ")  
if "a" not in longest_sentence.lower():
    print("congrats, the sentence does not contain the letter A")

######## ------ Exercise 3------ ########
                           
import re
paragraph="""
Python is a popular and versatile programming language 
known for its readability and ease of use. It supports multiple programming paradigms,
 including procedural, object-oriented, and functional styles.
   Python’s extensive standard library and large ecosystem of third-party packages 
   make it suitable for a wide range of tasks, 
   from web development to data analysis and artificial intelligence.
     Its simple syntax encourages beginners to learn programming,
       while its powerful capabilities attract experienced developers to solve complex problems
         efficiently."""
paragraph = re.sub(r'\s+', ' ', paragraph).strip()
print("The paragraph without extra spaces is:")
print(paragraph)


# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
