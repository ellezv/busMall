'use strict';
var catalogArray = [];
function CatalogItem(imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyClicked = 0;
  this.tallyDisplayed = 0;
  catalogArray.push(this);
}

var bag = new CatalogItem('Bag', '../img/bag.jpg');
var banana = new CatalogItem('Banana', '../img/banana.jpg');
var bathroom = new CatalogItem('Bathroom', '../img/bag.jpg');
var boots = new CatalogItem('Boots', '../img/boot.jpg');
var breakfast = new CatalogItem('Breakfast', '../img/Breakfast.jpg');
var bubblegum = new CatalogItem('Bubblegum', '../img/bubblegum.jpg');
var chair = new CatalogItem('Chair', '../img/chair.jpg');
var cthulhu = new CatalogItem('Cthulhu', '../img/cthulhu.jpg');
var dog_duck = new CatalogItem('Dog Duck', '../img/dog-duck.jpg');
var dragon = new CatalogItem('Dragon', '../img/dragon.jpg');
var pen = new CatalogItem('Pen', '../img/pen.jpg');
var pet_sweep = new CatalogItem('Pet Sweep', '../img/pet-sweep.jpg');
var scissors = new CatalogItem('Scissors', '../img/scissors.jpg');
var shark = new CatalogItem('Shark', '../img/shark.jpg');
var sweep = new CatalogItem('Sweep', '../img/sweep.jpg');
var tauntaun = new CatalogItem('Tauntaun', '../img/tauntaun.jpg');
var unicorn = new CatalogItem('Unicorn', '../img/unicorn.jpg');
var usb = new CatalogItem('USB', '../img/usb.jpg');
var water_can = new CatalogItem('Watering Can', '../img/water-can.jpg');
var wine_glass = new CatalogItem('Wine Glass', '../img/wine-glass.jpg');
