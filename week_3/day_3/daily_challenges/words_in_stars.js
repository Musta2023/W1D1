
// ====== Daily Challenge 2
// 1. Prompt the user
const input = prompt("Enter words separated by commas:");

// 2. Turn input into array, trim whitespace
const words = input.split(",").map(word => word.trim());

// 3. Find the length of the longest word
const maxLength = Math.max(...words.map(word => word.length));

// 4. Build the top/bottom border
const border = "*".repeat(maxLength + 4); // 4 = 2 for "* " and " *"

// 5. Print each word in the frame
console.log(border);
for (const word of words) {
  const spaces = " ".repeat(maxLength - word.length);
  console.log(`* ${word}${spaces} *`);
}
console.log(border);
