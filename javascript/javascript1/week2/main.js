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

//Weather wear

//Student manager

//Candy helper
