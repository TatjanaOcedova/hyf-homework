const productList = document.getElementById("product-list");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    //should add a product to the products array.
    this.products.push(product);
  }

  removeProduct(product) {
    // Implement functionality here
    //should remove a product from the products array.
    const findIndex = this.products.indexOf(product);
    //Array.prototype.indexOf() will return -1 if the element is not found so recommend safety check around this.
    if (findIndex > -1) {
      this.products.splice(findIndex, 1);
      //   product--; //will remove every matching item
    }
  }

  searchProduct(productName) {
    // Implement functionality here
    // should return an array of product that match the productName parameter
    // let productName = [];

    const indexSearchProducts = this.products.indexOf(productName);
    let searchProducts = [];
    if (indexSearchProducts > -1) {
      searchProducts.push(this.products[indexSearchProducts]);
    }
    return searchProducts;
  }

  getTotal() {
    // Implement functionality here
    //should get the total price of the products in the shoppingcart.
    const totalPriceShoppCart = document.getElementById("total");
    const items = this.products;
    const totalPrice = items
      .map((itemPrice) => itemPrice.price)
      .reduce(
        (previousValue, nextItemValue) => previousValue + nextItemValue,
        0
      );
    totalPriceShoppCart.innerHTML = `Total price: ${totalPrice}`;
    // return totalPrice;
  }

  renderProducts() {
    // Implement functionality here
    // should render the products to html. You decide what to show and how.
    this.products.forEach((product) => {
      const showProduct = document.createElement("div");
      showProduct.innerHTML = `<p>${product.name}: ${product.price}`;
      productList.appendChild(showProduct);
    });
  }

  getUser() {
    // Implement functionality here
    const user = document.getElementById("user-name");
    const randomUser = Math.floor(Math.random() * 10 + 1);
    return fetch(`https://jsonplaceholder.typicode.com/users/${randomUser}`)
      .then((response) => response.json())
      .then((data) => {
        const userName = document.createElement("p");
        userName.innerHTML = data.name;
        user.appendChild(userName);
      });
  }
}

//I forgot something    SEARCH INPUT FIELD
//

const shoppingCart = new ShoppingCart();

const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);

const mobile = new Product("mobile", 3000);
shoppingCart.addProduct(mobile);

const camera = new Product("camera", 1500);
shoppingCart.addProduct(camera);

console.log(shoppingCart.products);
console.log(shoppingCart.searchProduct(mobile));
// console.log(shoppingCart.removeProduct(camera));

shoppingCart.removeProduct(mobile);
//shoppingCart.searchProduct(mobile);
shoppingCart.getTotal();
shoppingCart.renderProducts();
shoppingCart.getUser();

//DON'T WORK
// const searchProductsInput = document.getElementById("input");
// searchProductsInput.addEventListener("input", function (e) {
//   const valueInput = e.target.value;
//   //   const filterImput = this.products.filter((item) =>
//   //     item.name.toLowerCase().includes(valueInput.toLowerCase())
//   //   );
//   //   renderProducts(filterImput);
//   shoppingCart.renderProducts();
// });
