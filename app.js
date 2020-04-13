'use strict';
// 1: randomly display three unique products

// create constructor function that creates an object associated with each product and has the following properties:
//           name of product
//           file path of image

let allProducts = [];

function Product(name, imageSrc) {
  this.name = name;
  this.imageSrc = imageSrc;
  this.clickCount = 0;

  allProducts.push(this);
}

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');

// create an algorithm that will randomly generate three unique product images from the image directory and display them side by side

let randomlyGenerateProduct = Math.floor(Math.random() * allProducts.length);

// render product images to page
// section class="images"

Product.prototype.render = function () {
  let targetProduct = document.getElementById('images');
  let newImg = document.createElement('img');

  // add event listener to product images
  targetProduct.addEventListener('click', (evento) => {
    console.log(this.clickCount);
    this.clickCount++;
  })

  newImg.src = this.imageSrc;
  newImg.name = this.name;

  targetProduct.appendChild(newImg);
};

allProducts.forEach((product) => {
  product.render();
});

// once the user clicks a product, generate three new products for the user to choose from





// 2: track selections made by viewers

// in constructor function, define a property to hold the number of times a product has been clicked
// after every selection by the viewer, update the newly added property to reflect if it was clicked

// 3: control the number of rounds a user is presented with so that I can control the voting session duration

// by default, show user 25 rounds of voting before ending session
// store number of rounds in varaible

// 4: show report of results after each round has concluded

// create a property attached to the constructor function that keeps track of all the products that are currently being considered
// after voting has concluded, remove the event listeners from the product
// display list of all products followed by votes receive and number of times seen
//      example: Banana Slicer had 3 votes and was shown 5 times
