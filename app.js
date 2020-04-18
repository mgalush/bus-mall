'use strict';
import createChart from './productChart.js';

// 1: randomly display three unique products
// 2: track selections made by viewers
// 3: control the number of rounds a user is presented with so that I can control the voting session duration
// 4: show report of results after each round has concluded

// create constructor function that creates an object associated with each product with the number of times the product has been clicked

let allProducts = [];

function Product(name, imageSrc) {
  this.name = name;
  this.imageSrc = imageSrc;
  this.clickCount = 0;
  this.isBeingConsidered = false;
  this.displayCount = 0;

  allProducts.push(this);
}

// render product images to page
Product.prototype.render = function () {
  let target = document.getElementById('productContainer');
  let div = document.createElement('div');
  let newImg = document.createElement('img');
  newImg.classList.add('product');

  // add event listener to product images
  newImg.addEventListener('click', () => {
    this.clickCount++;
  });

  newImg.src = this.imageSrc;
  newImg.name = this.name;

  this.displayCount++;
  let newCount = document.createElement('p');
  newCount.innerText =
    'Selected: ' + this.clickCount + '\n' + 'Displayed: ' + this.displayCount;

  target.appendChild(div);
  div.appendChild(newImg);
  div.appendChild(newCount);
};

// create an algorithm that will randomly generate three unique product images from the image directory and display them side by side

function getRandomUniqueElementsFromArray(array) {
  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    let index = Math.floor(Math.random() * array.length);
    if (randomIndexes.indexOf(index) === -1) {
      randomIndexes.push(index);
    }
  }
  return randomIndexes.map((i) => array[i]);
}

function randomlyGenerateProducts() {
  const randomProducts = getRandomUniqueElementsFromArray(allProducts, 3);

  randomProducts.forEach((productPotato) => {
    productPotato.render();
  });
}
// once the user clicks a product, generate 25 rounds with three new products each round

// calculate round count
let rounds = 1;
function roundCount() {
  let targetCount = document.getElementById('roundCount');
  if (rounds < 25) {
    targetCount.innerText = rounds + ' of 25';
  } else {
  }
}

let targetProduct = document.getElementById('productContainer');
targetProduct.addEventListener('click', productContainerClicked);

function productContainerClicked() {
  targetProduct.innerHTML = '';
  if (rounds < 25) {
    rounds++;
    roundCount();
    randomlyGenerateProducts();
  } else {
    targetProduct.removeEventListener('click', productContainerClicked);
    let instructions = document.getElementById('instructions');
    instructions.remove();
    let targetCount = document.getElementById('roundCount');
    targetCount.innerText = 'Thanks for participating!';
    createChart(allProducts);
  }
}

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

randomlyGenerateProducts();
