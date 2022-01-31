//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWord(compare) {
  return compare.reduce((a, b) => (a.length <= b.length ? a : b));
}
shortestWord(danishWords);

//Find and count the Danish letters
//Find the individual number and the total number of Danish letters in a string.

const danishLetters = ["æ", "å", "ø"];
function find(str) {
  let letters = { total: 0 };
  for (let i = 0; i < str.length; i++) {
    if (danishLetters.includes(str[i])) {
      letters.total = letters.total + 1;
      if (letters.hasOwnProperty(str[i])) {
        letters[str[i]] = letters[str[i]] += 1;
      } else {
        letters[str[i]] = 1;
      }
    }
  }
  return letters;
}

const danishString = "Jeg har en blå bil";
find(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
find(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

//Spirit animal name generator
let spiritAnimals = [
  "The fullmoon wolf",
  "The crying butterfly",
  "The 12 legged spider",
  "The flying tiger",
  "The fastest gazelle",
  "The sleepy panda",
  "The lion king",
  "The dancing tiger",
  "The spy penguin",
  "The graceful giraffe",
];

const body = document.querySelector("body");
const input = document.querySelector(".inputName");
const button = document.querySelector(".buttonGenerate");
const displayP = document.createElement("h4");

button.addEventListener("click", function () {
  let random = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
  const name = document.querySelector(".inputName").value;
  if (name === "") {
    alert("Please enter your name");
  } else {
    displayP.innerText = "Your spirit animal name: " + name + "-" + random;
  }
  body.appendChild(displayP);
});
