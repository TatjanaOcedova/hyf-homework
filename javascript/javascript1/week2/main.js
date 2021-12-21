//freeCodeCamp user:@TatjanaOcedova

//Flight booking fullname
function getFullname(firstname, surname, useFormalName, gender) {
  if (firstname.length === 0 || surname.length === 0) {
    return "Fullname is empty";
  } else if (useFormalName == true) {
    switch (gender) {
      case "female":
        return "Lady " + firstname + " " + surname;
        break;
      case "male":
        return "Lord " + firstname + " " + surname;
        break;
      default:
        return firstname + " " + surname;
        break;
    }
  } else {
    return firstname + " " + surname;
  }
}

const fullname1 = getFullname("Tatjana", "Ocedova", true, "female");
const fullname2 = getFullname("", "Ocedov", false, "male");

console.log(fullname1);
console.log(fullname2);

//Event application
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getEventWeekday(daysLeft) {
  const todaysDate = new Date();
  const eventDate = new Date(
    todaysDate.getFullYear(),
    todaysDate.getMonth(),
    todaysDate.getDate() + daysLeft
  );
  return weekday[eventDate.getDay()];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));

//Weather wear
function weatherTemperature(celsius) {
  if (celsius <= 5) {
    return "warm cloths, jacket and boots";
  } else if (celsius <= 15) {
    return "raincoat and sneakers";
  } else if (celsius <= 25) {
    return "t-shirt, jeans and sandals";
  } else {
    return "beach wear";
  }
}
const clothsToWear = weatherTemperature(45);
console.log(clothsToWear);

//Student manager
const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if (studentName == "") {
    return "Please add a name";
  } else if (class07Students.includes(studentName)) {
    return "Student " + studentName + " is already in the class.";
  } else if (studentName == "Queen") {
    return class07Students.push(studentName);
  } else if (class07Students.length > 6) {
    return "Cannot add more students to class 07";
  } else {
    return class07Students.push(studentName);
  }
}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}
addStudentToClass("");
addStudentToClass("Ed");
addStudentToClass("Queen");
addStudentToClass("Mira");
addStudentToClass("Ben");
addStudentToClass("John");
addStudentToClass("Sara");
addStudentToClass("Ed");
addStudentToClass("Emma");
addStudentToClass("Barbara");
addStudentToClass("Ben");
addStudentToClass("Bruno");
addStudentToClass("Queen");

console.log(class07Students);
console.log(getNumberOfStudents());

//Candy helper
