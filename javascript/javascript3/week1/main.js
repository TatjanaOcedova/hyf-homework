//Books JSON file
const booksJson = `[
    {
      "Name": "The girl with gragot tattoo",
      "Author": "Stieg Larsson",
      "Pages": "542",
      "First paublished": "2008",
    },
    {
      "Name": "Angels and demons",
      "Author": "Dan Brown",
      "Pages": "620",
      "First paublished": "2001",
    }
  ]`;

const parsedJavascript = JSON.parse(booksJson);
console.log(parsedJavascript);
