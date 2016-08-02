'use strict';
var randomIndex1 = 0;
var randomIndex2 = 0;
var randomIndex3 = 0;
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
  randomIndex1 = Math.floor(Math.random() * (catalogArray.length));

  randomIndex2 = Math.floor(Math.random() * (catalogArray.length));
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * (catalogArray.length));
  }


  randomIndex3 = Math.floor(Math.random() * (catalogArray.length));
  while (randomIndex3 === randomIndex2 || randomIndex3 === randomIndex1) {
    randomIndex3 = Math.floor(Math.random() * (catalogArray.length));
  }
  console.log(randomIndex1, randomIndex2, randomIndex3);

  imgLeft.src = catalogArray[randomIndex1].filePath;
  imgCenter.src = catalogArray[randomIndex2].filePath;
  imgRight.src = catalogArray[randomIndex3].filePath;

  catalogArray[randomIndex1].tallyDisplayed = catalogArray[randomIndex1].tallyDisplayed + 1;
  catalogArray[randomIndex2].tallyDisplayed = catalogArray[randomIndex2].tallyDisplayed + 1;
  catalogArray[randomIndex3].tallyDisplayed = catalogArray[randomIndex3].tallyDisplayed + 1;
}

randomThreePictures();

function handleUserClick() {
  var userClick = event.target.id;
  console.log(userClick);
  if (votingRound < 3) {
    if (userClick === 'left') {
      console.log('user clicked left');
      votingRound = votingRound + 1;
      console.log('voting round: ' + votingRound);
      catalogArray[randomIndex1].tallyClicked = catalogArray[randomIndex1].tallyClicked + 1;
      console.log(catalogArray[randomIndex1].imageName + ' clicked: ' + catalogArray[randomIndex1].tallyClicked + ' times');
      randomThreePictures();
    }else if (userClick === 'center'){
      console.log('user clicked center');
      votingRound = votingRound + 1;
      console.log('voting round: ' + votingRound);
      catalogArray[randomIndex1].tallyClicked = catalogArray[randomIndex2].tallyClicked + 1;
      console.log(catalogArray[randomIndex2]);
      console.log(catalogArray[randomIndex2].imageName + ' clicked: ' + catalogArray[randomIndex2].tallyClicked + ' times');
      randomThreePictures();
    }else if (userClick === 'right') {
      console.log('user clicked right');
      votingRound = votingRound + 1;
      console.log('voting round: ' + votingRound);
      catalogArray[randomIndex3].tallyClicked = catalogArray[randomIndex3].tallyClicked + 1;
      console.log(catalogArray[randomIndex3].imageName + ' clicked: ' + catalogArray[randomIndex3].tallyClicked + ' times');
      randomThreePictures();
    }else {
      alert('That\'s not even a picture. Try again.');
    }
  }else {
    myThreePictures.removeEventListener('click',handleUserClick);
    var button = document.createElement('button');
    button.textContent = 'you\'re done so click here';
    myThreePictures.appendChild(button);
    function handleButtonClick() {
      alert('This shit works');
    }
    button.addEventListener('click', handleButtonClick);
  }
}

myThreePictures.addEventListener('click', handleUserClick);
