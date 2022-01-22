const names = [];
const todo = [];
function getReply(command) {
  const lowerCase = command.toLowerCase();
  //console.log(lowerCase)

  let words = lowerCase.split(" ");
  let myName = words[words.length - 1];
  names.push(myName);

  if (lowerCase.includes("hello my name is")) {
    console.log("Nice to meet you " + names[0]);
  } else if (words.length == 0) {
    console.log("Please tell your name");
  }
  if (lowerCase.includes("what is my name")) {
    console.log("Your name is " + names[0]);
  }
  if (lowerCase.includes("add fishing to my todo")) {
    todo.push("fishing");
    console.log("Fishing added to your todo");
  }
  if (lowerCase.includes("add singing in the shower to my todo")) {
    todo.push("singing in the shower");
    console.log("Singing in the shower added to your todo");
  }
  if (lowerCase.includes("remove fishing from my todo")) {
    todo.shift("fishing");
    console.log("Removed fishing from your todo");
  }
  if (lowerCase.includes("what is on my todo?")) {
    console.log(`You have ${todo.length} todo ${todo}`);
  }
  if (lowerCase.includes("what day is it today?")) {
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ];
    let date = new Date();
    console.log(date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log(`${day}. of ${monthsOfYear[month]} ${year}`);
  }
  if (lowerCase.includes("+")) {
    const x = lowerCase.split(" ");
    const numbers = x.filter((n) => Number(n));
    const answer = numbers.reduce((a, b) => Number(a) + Number(b), 0);
    console.log(answer);
  }
  if (lowerCase.includes("*")) {
    const x = lowerCase.split(" ");
    const numbers = x.filter((n) => Number(n));
    const answer = numbers.reduce((a, b) => Number(a) * Number(b));
    console.log(answer);
  }
  if (lowerCase.includes("set a timer")) {
    const x = lowerCase.split(" ");
    const numbers = x.filter((n) => Number(n));
    console.log("Timer set for " + numbers + " minutes");
    const timeout = setTimeout(function countdown() {}, +numbers * 60000);
    console.log("Timer done!");
  }
}

getReply("Hello my name is Tatjana"); // "Nice to meet you Benjamin"
getReply("What is my name?"); // "Your name is Benjamin"
getReply("Add fishing to my todo"); // "fishing added to your todo"
getReply("Add singing in the shower to my todo"); // "singing in the shower added to your todo"
getReply("Remove fishing from my todo"); // "fishing removed to your todo"
getReply("What is on my todo?"); // "You have fishing and singing in the shower"
getReply("What day is it today?"); // "21. of January 2022"
getReply("What is 3 + 3"); // "6"
getReply("What is 4 * 12"); // "48"
getReply("Set a timer for 1 minutes."); //"Timer set for 1 minutes"; When 4 minutes is up: "Timer done".
