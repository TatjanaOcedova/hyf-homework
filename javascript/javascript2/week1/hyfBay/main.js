console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

let ul = document.querySelector(".list");

function renderProducts(products) {
  // your code here
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productTitle = document.createElement("h3");
    let produductPrice = document.createElement("p");
    let productRating = document.createElement("p");

    productTitle.innerText = product.name;
    produductPrice.innerText = "price: " + product.price;
    productRating.innerText = "rating: " + product.rating;
    let productList = document.createElement("li");
    productList.appendChild(productTitle);
    productList.appendChild(produductPrice);
    productList.appendChild(productRating);
    ul.appendChild(productList);
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details
