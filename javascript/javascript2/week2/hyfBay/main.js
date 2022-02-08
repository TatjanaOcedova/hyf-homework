console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

let ul = document.querySelector(".list");

function renderProducts(products) {
  ul.innerHTML = "";
  products.forEach((product) => {
    //for (let i = 0; i < products.length; i++) {
    // product = products[i];
    let productTitle = document.createElement("h2");
    let productPrice = document.createElement("p");
    let productRating = document.createElement("p");

    productTitle.innerText = product.name;
    productPrice.innerText = "price: " + product.price;
    productRating.innerText = "rating: " + product.rating;

    let productList = document.createElement("li");
    productList.appendChild(productTitle);
    productList.appendChild(productPrice);
    productList.appendChild(productRating);
    ul.appendChild(productList);
    // }
  });
}

renderProducts(products); // This should create the ul and the li's with the individual products details

//Filter products
//.addEventListener on an element
const searchProductsInput = document.querySelector(".inputProductName");
searchProductsInput.addEventListener("input", function (e) {
  const valueInput = e.target.value;
  const filterImput = products.filter((item) =>
    item.name.toLowerCase().includes(valueInput.toLowerCase())
  );

  renderProducts(filterImput);
});

//Filter products based on max price
const searchProductMaxPrice = document.querySelector(".inputPrice");
searchProductMaxPrice.addEventListener("input", function (e) {
  const valueMaxPrice = e.target.value;
  const filterMaxPrice = products.filter((item) => item.price <= valueMaxPrice);

  filterMaxPrice.sort((a, b) => a.price - b.price);
  renderProducts(filterMaxPrice);
});

//Sort the products on rating
const searchProductRating = document.querySelector(".inputRating");
searchProductRating.addEventListener("input", function (e) {
  const valueMaxRating = e.target.value;
  const filterMaxRating = products.filter(
    (item) => item.rating <= valueMaxRating
  );
  filterMaxRating.sort((a, b) => b.rating - a.rating);
  renderProducts(filterMaxRating);
});
