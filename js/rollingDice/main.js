// Put your code here
console.log("Let's roll some dice, baby!");
console.log("---------------------------");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < 10; i++) {
  const rollNum = [1, 2, 3, 4, 5, 6]
  const rollWord = ["one", "two", "three", "four", "five", "six"]
  let firstWord = rollWord[getRandomInt(5)];
  let secondWord = rollWord[getRandomInt(5)];
  let firstWordNum = rollWord.indexOf(firstWord);
  let secondWordNum = rollWord.indexOf(secondWord);
  let firstNum = rollNum[firstWordNum];
  let secondNum = rollNum[secondWordNum];

  let message = `${firstWord} + ${secondWord} == ${firstNum + secondNum}`;
  if (firstWord == secondWord) {
    message += " DOUBLES!";
  }

  console.log(message);
}
