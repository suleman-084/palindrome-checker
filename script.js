let btn = document.getElementById("button");

const reverseString = (str) => {
  let splitString = str.split("").reverse().join("");
  return splitString;
};

let palindromeCheck = () => {
  let msg = document.getElementById("input-text").value;
  let ans = document.getElementById("result");
  msg = msg.toLowerCase();
  if (msg == reverseString(msg)) {
    ans.innerHTML = "Its a Palindrome";
  } else {
    ans.innerHTML = "Its not a Palindrome";
  }
};
btn.addEventListener("click", palindromeCheck);
