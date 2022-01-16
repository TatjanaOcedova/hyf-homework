// freeCodeCamp: @TatjanaOcedova

//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
let nameToRemove = "Ahmad";

// Write some code here
for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}
// names.splice(1, 1); if I don't need to use nameToRemove
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function infoTravelTime(speed, destinationDistance) {
  let info = travelInformation.destinationDistance / travelInformation.speed;
  let hours = Math.floor(info);
  let minutes = Math.floor((info % 1) * 60);
  return hours + " hours and " + minutes + " minutes";
}

const travelTime = infoTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

//Series duration of my life
const seriesDurations = [
  {
    title: "Friends",
    days: 4,
    hours: 2,
    minutes: 20,
  },
  {
    title: "The Big Bang Theory",
    days: 4,
    hours: 6,
    minutes: 18,
  },
  {
    title: "Sex and the city",
    days: 5,
    hours: 17,
    minutes: 30,
  },
];

let lifespan = 80 * 365 * 24 * 60;
let durationTotal = 0;

function logOutSeriesText() {
  // write code here
  for (let i = 0; i < seriesDurations.length; i++) {
    let duration =
      ((seriesDurations[i].days * 24 * 60 +
        seriesDurations[i].hours * 60 +
        seriesDurations[i].minutes) /
        lifespan) *
      100;

    console.log(
      seriesDurations[i].title +
        " took " +
        duration.toFixed(seriesDurations.length) +
        "% of my life."
    );

    durationTotal += Number(duration.toFixed(seriesDurations.length));
  }
  console.log("In total that is " + durationTotal + "% of my life.");
}

logOutSeriesText(seriesDurations); // logs out the text found above

//NOnoN0nOYes (Note taking app)
const notes = [];

function saveNote(content, id) {
  // write some code here
  const note = {
    content: content,
    id: id,
  };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Get a note
function getNote(id) {
  // your code here
  for (let i = 0; i < getNote.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    } else {
      return "You entered wrong id";
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes
function logOutNotesFormatted() {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        " , has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
