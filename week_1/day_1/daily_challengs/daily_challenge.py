# ------ Challenge 1
number=int(input("Enter a number: "))
length=int(input("Enter the length : "))
multiples=[i*number for i in range(1,length+1)]
print("multiples of",number,"in length", length,"are",multiples)

# ------ Challenge 2
user_word=input("Enter a word:")
result=""
for char in user_word:
    if not result or char !=result[-1]:
        result +=char
print("filtred word is:",result)
