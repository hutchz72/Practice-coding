const prompt = require("prompt-sync")();

function isPalindrome() {
  const str = prompt("Enter a string: ").toLowerCase().replace(/[^a-z0-9]/g,"");

  const strlength = str.length;
  let isPalin = true;
  for (let i = 0; i < strlength / 2; i++) {
    if (str[i] !== str[strlength - (i + 1)]) {
      isPalin = false;
      break;
    }
  }

  if (isPalin) {
    console.log(`the word ${str} is palindrome`);
  } else {
    console.log(`the word ${str} is not palindrome`);
  }
}

isPalindrome();
