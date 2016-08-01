'use strict';
var votingRound = 0;
var catalogArray = [];
var myThreePictures = document.getElementById('myThreePictures');
var imgLeft = document.getElementById('left');
var imgCenter = document.getElementById('center');
var imgRight = document.getElementById('right');
function CatalogItem(imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyClicked = 0;
  this.tallyDisplayed = 0;
  catalogArray.push(this);
}

var bag = new CatalogItem('Bag', 'img/bag.jpg'); //eslint-disable-line
var banana = new CatalogItem('Banana', 'img/banana.jpg');//eslint-disable-line
var bathroom = new CatalogItem('Bathroom', 'img/bathroom.jpg');//eslint-disable-line
var boots = new CatalogItem('Boots', 'img/boots.jpg');//eslint-disable-line
var breakfast = new CatalogItem('Breakfast', 'img/Breakfast.jpg');//eslint-disable-line
var bubblegum = new CatalogItem('Bubblegum', 'img/bubblegum.jpg');//eslint-disable-line
var chair = new CatalogItem('Chair', 'img/chair.jpg');//eslint-disable-line
var cthulhu = new CatalogItem('Cthulhu', 'img/cthulhu.jpg');//eslint-disable-line
var dog_duck = new CatalogItem('Dog Duck', 'img/dog-duck.jpg');//eslint-disable-line
var dragon = new CatalogItem('Dragon', 'img/dragon.jpg');//eslint-disable-line
var pen = new CatalogItem('Pen', 'img/pen.jpg');//eslint-disable-line
var pet_sweep = new CatalogItem('Pet Sweep', 'img/pet-sweep.jpg');//eslint-disable-line
var scissors = new CatalogItem('Scissors', 'img/scissors.jpg');//eslint-disable-line
var shark = new CatalogItem('Shark', 'img/shark.jpg');//eslint-disable-line
var sweep = new CatalogItem('Sweep', 'img/sweep.jpg');//eslint-disable-line
var tauntaun = new CatalogItem('Tauntaun', 'img/tauntaun.jpg');//eslint-disable-line
var unicorn = new CatalogItem('Unicorn', 'img/unicorn.jpg');//eslint-disable-line
var usb = new CatalogItem('USB', 'img/usb.jpg');//eslint-disable-line
var water_can = new CatalogItem('Watering Can', 'img/water-can.jpg');//eslint-disable-line
var wine_glass = new CatalogItem('Wine Glass', 'img/wine-glass.jpg');//eslint-disable-line

function randomThreePictures() {
  var randomIndex1 = Math.floor(Math.random() * (catalogArray.length));
  console.log(randomIndex1);

  var randomIndex2 = Math.floor(Math.random() * (catalogArray.length));
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * (catalogArray.length));
  }
  console.log(randomIndex2);

  var randomIndex3 = Math.floor(Math.random() * (catalogArray.length));
  while (randomIndex3 === randomIndex2 || randomIndex3 === randomIndex1) {
    randomIndex3 = Math.floor(Math.random() * (catalogArray.length));
  }
  console.log(randomIndex3);

  imgLeft.src = catalogArray[randomIndex1].filePath;
  imgCenter.src = catalogArray[randomIndex2].filePath;
  imgRight.src = catalogArray[randomIndex3].filePath;

  catalogArray[randomIndex1].tallyDisplayed = catalogArray[randomIndex1].tallyDisplayed + 1;
  catalogArray[randomIndex2].tallyDisplayed = catalogArray[randomIndex2].tallyDisplayed + 1;
  catalogArray[randomIndex3].tallyDisplayed = catalogArray[randomIndex3].tallyDisplayed + 1;
}

randomThreePictures();

function handleUserClick() {
  var userClick = event.target;
  if (userClick === imgLeft) {
    console.log('user clicked left');
    votingRound = votingRound + 1;
    catalogArray[randomIndex1].tallyClicked = catalogArray[randomIndex1] + 1;
    randomThreePictures();
  }else {
    alert('Nope, this is not a picture. Try again.');
  }
}

myThreePictures.addEventListener('click', handleUserClick);
