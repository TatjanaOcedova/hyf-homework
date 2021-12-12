// Age-ify (A future age calculator)
const yearOfBirth = 1986;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture + ".");

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let humanYear = dogYearFuture - dogYearOfBirth;
let dogYear = humanYear * 7;
let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears === true) {
  console.log(
    "Your dog will be " +
      humanYear +
      " human years old in " +
      dogYearFuture +
      "."
  );
} else {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture + "."
  );
}

//Housey pricey (A house price estimator)
let names = ["Peter", "Julia"];
let houseWide = [8, 5];
let houseDeep = [10, 11];
let houseHigh = [10, 8];
let gardenSize = [100, 70];
let houseCosts = [2500000, 1000000];
let housePrice;

for (let i = 0; i < names.length; i++) {
  housePrice =
    houseWide[i] * houseDeep[i] * houseHigh[i] * 2.5 * 1000 +
    gardenSize[i] * 300;

  if (housePrice > houseCosts[i]) {
    console.log(names[i] + " is paying too little.");
  } else {
    console.log(names[i] + " is paying too much.");
  }
}

//Ez Namey (Startup name generator) Optional
const firstWords = [
  "Easy",
  "Awesome",
  "Creative",
  "Artistic",
  "Innovative",
  "Design",
  "Original",
  "Visionary",
  "Clever",
  "Inspired",
];
const secondWords = [
  "Corporate",
  "Company",
  "Business",
  "Enterprise",
  "Firm",
  "House",
  "Staff",
  "Agency",
  "Crew",
  "Team",
];
const startupName =
  firstWords[Math.floor(Math.random() * 10)] +
  secondWords[Math.floor(Math.random() * 10)];

console.log(
  "The startup: " +
    startupName +
    " contains " +
    startupName.length +
    " characters" +
    "!"
);
