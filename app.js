'use strict';
// 1: randomly display three unique products
// 2: track selections made by viewers
// 3: control the number of rounds a user is presented with so that I can control the voting session duration


// create constructor function that creates an object associated with each product and has the following properties:
//           name of product
//           file path of image
// in constructor function, define a property to hold the number of times a product has been clicked
// after every selection by the viewer, update the newly added property to reflect if it was clicked

let allProducts = [];

function Product(name, imageSrc) {
  this.name = name;
  this.imageSrc = imageSrc;
  this.clickCount = 0;

  allProducts.push(this);
}

// render product images to page

///// div.classList.add("anotherclass");


Product.prototype.render = function () {
  let target = document.getElementById('productContainer');
  let div = document.createElement('div');
  let newImg = document.createElement('img');
  newImg.classList.add('product');
  
  // add event listener to product images
  newImg.addEventListener('click', (evento) => {
    this.clickCount++;
    console.log(this.clickCount);
  });
  
  newImg.src = this.imageSrc;
  newImg.name = this.name;
  
  let newCount = document.createElement('p');
  newCount.innerText = 'Score: ' + this.clickCount;
  
  target.appendChild(div);
  div.appendChild(newImg);
  div.appendChild(newCount);
};

// TODO: remove duplicates from list

// create an algorithm that will randomly generate three unique product images from the image directory and display them side by side

function randomlyGenerateProducts() {
  let randomlyGeneratedProduct1 =
  allProducts[Math.floor(Math.random() * allProducts.length)];
  
  let randomlyGeneratedProduct2 =
  allProducts[Math.floor(Math.random() * allProducts.length)];
  
  let randomlyGeneratedProduct3 =
  allProducts[Math.floor(Math.random() * allProducts.length)];
  
  randomlyGeneratedProduct1.render();
  randomlyGeneratedProduct2.render();
  randomlyGeneratedProduct3.render();
}

// once the user clicks a product, generate three new products for the user to choose from

let targetProduct = document.getElementById('productContainer');
targetProduct.addEventListener('click', (event) => {
  targetProduct.innerHTML = '';
  randomlyGenerateProducts();
});




// by default, show user 25 rounds of voting before ending session
// store number of rounds in varaible




// 4: show report of results after each round has concluded

// create a property attached to the constructor function that keeps track of all the products that are currently being considered
// after voting has concluded, remove the event listeners from the product
// display list of all products followed by votes receive and number of times seen
//      example: Banana Slicer had 3 votes and was shown 5 times






new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');



randomlyGenerateProducts();