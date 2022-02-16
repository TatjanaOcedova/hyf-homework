const inputSearchText = document.getElementById("inputText");
const gifNumber = document.getElementById("giphy-number");
const buttonSearch = document.getElementById("buttonSearch");
const inputNumbOfGif = document.getElementById("inputNumber");
const imgGif = document.querySelector(".display");

buttonSearch.addEventListener("click", () => {
  const getWord = inputSearchText.value;
  const getNumber = inputNumbOfGif.value;

  //const url = Y3itGrYkAOMCcW6xYWWdXt66y2h5T5Wt;
  if (inputSearchText.value === "") {
    window.alert("Please search for a gif...");
  } else {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${getWord}&limit=${getNumber}&api_key=Y3itGrYkAOMCcW6xYWWdXt66y2h5T5Wt`
    )
      .then((response) => response.json())
      .then((obj) => {
        //console.log(obj);
        obj.data.forEach((element) => {
          let imgGif1 = document.createElement("img");
          imgGif1.src = element.images.fixed_height.webp;
          imgGif.appendChild(imgGif1);
        });
      });
  }
});
