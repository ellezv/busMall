'use strict';

// Global variables :
var randomIndex1;
var randomIndex2;
var randomIndex3;
var votingRound = 0;
var catalogArray = [];
var lastIndexArray = [0,1,2];
var clicks = [];
var names = [];
var percentageClickedDisplayed = [];
var myThreePictures = document.getElementById('my_three_pictures');
var imgLeft = document.getElementById('left');
var imgCenter = document.getElementById('center');
var imgRight = document.getElementById('right');

//Declaring functions:
function CatalogItem(imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyClicked = 0;
  this.tallyDisplayed = 0;
  catalogArray.push(this);
}

function makeMyStuff() {
  new CatalogItem('Bag', 'img/bag.jpg'); //eslint-disable-line
  new CatalogItem('Banana', 'img/banana.jpg');//eslint-disable-line
  new CatalogItem('Bathroom', 'img/bathroom.jpg');//eslint-disable-line
  new CatalogItem('Boots', 'img/boots.jpg');//eslint-disable-line
  new CatalogItem('Breakfast', 'img/Breakfast.jpg');//eslint-disable-line
  new CatalogItem('Bubblegum', 'img/bubblegum.jpg');//eslint-disable-line
  new CatalogItem('Chair', 'img/chair.jpg');//eslint-disable-line
  new CatalogItem('Cthulhu', 'img/cthulhu.jpg');//eslint-disable-line
  new CatalogItem('Dog Duck', 'img/dog-duck.jpg');//eslint-disable-line
  new CatalogItem('Dragon', 'img/dragon.jpg');//eslint-disable-line
  new CatalogItem('Pen', 'img/pen.jpg');//eslint-disable-line
  new CatalogItem('Pet Sweep', 'img/pet-sweep.jpg');//eslint-disable-line
  new CatalogItem('Scissors', 'img/scissors.jpg');//eslint-disable-line
  new CatalogItem('Shark', 'img/shark.jpg');//eslint-disable-line
  new CatalogItem('Sweep', 'img/sweep.jpg');//eslint-disable-line
  new CatalogItem('Tauntaun', 'img/tauntaun.jpg');//eslint-disable-line
  new CatalogItem('Unicorn', 'img/unicorn.jpg');//eslint-disable-line
  new CatalogItem('USB', 'img/usb.jpg');//eslint-disable-line
  new CatalogItem('Watering Can', 'img/water-can.jpg');//eslint-disable-line
  new CatalogItem('Wine Glass', 'img/wine-glass.jpg');//eslint-disable-line
}

function randomThreePictures() {
  randomIndex1 = Math.floor(Math.random() * (catalogArray.length));
  while (lastIndexArray.indexOf(randomIndex1) !== -1) {
    randomIndex1 = Math.floor(Math.random() * (catalogArray.length));
  }

  randomIndex2 = Math.floor(Math.random() * (catalogArray.length));
  while (((randomIndex2 === randomIndex1)) || (lastIndexArray.indexOf(randomIndex2) !== -1)) {
    randomIndex2 = Math.floor(Math.random() * (catalogArray.length));
    console.log('duplicates');
  }

  randomIndex3 = Math.floor(Math.random() * (catalogArray.length));
  while (((randomIndex3 === randomIndex2) || (randomIndex3 === randomIndex1)) || (lastIndexArray.indexOf(randomIndex3) !== -1)) {
    randomIndex3 = Math.floor(Math.random() * (catalogArray.length));
    console.log('duplicates');
  }

  console.log(randomIndex1, randomIndex2, randomIndex3);

  lastIndexArray = [];
  lastIndexArray.push(randomIndex1);
  lastIndexArray.push(randomIndex2);
  lastIndexArray.push(randomIndex3);

  imgLeft.src = catalogArray[randomIndex1].filePath;
  imgLeft.alt = catalogArray[randomIndex1].imageName;
  imgCenter.src = catalogArray[randomIndex2].filePath;
  imgCenter.alt = catalogArray[randomIndex2].imageName;
  imgRight.src = catalogArray[randomIndex3].filePath;
  imgRight.alt = catalogArray[randomIndex3].imageName;

  catalogArray[randomIndex1].tallyDisplayed++;
  catalogArray[randomIndex2].tallyDisplayed++;
  catalogArray[randomIndex3].tallyDisplayed++;
}



function updateChartArrays() {
  for (var i = 0; i < catalogArray.length; i++) {
    names[i] = catalogArray[i].imageName;
    clicks[i] = catalogArray[i].tallyClicked;
    percentageClickedDisplayed[i] = ((catalogArray[i].tallyClicked / catalogArray[i].tallyDisplayed) * 100).toFixed(2);
  }

}



var clicksData = {
  labels: names,
  datasets: [
    {
      label: 'click count',
      data: clicks,
    }]
};


function drawClicksChart() {
  var ctx = document.getElementById('clickChart').getContext('2d');
  var clickChart = new Chart(ctx,{ //eslint-disable-line
    type: 'bar',
    data: clicksData,
    options: {
      responsive: false
    },
    scales: [{
      ticks: {
        beginAtZero:true
      }
    }]
  });
}

var percentageData = {
  labels: names,
  datasets: [
    {
      label: 'Percentage Clicks per Displays',
      data: percentageClickedDisplayed,
    }]
};

function drawPercentageChart() {
  var ctx = document.getElementById('percentageChart').getContext('2d');
  var percentageChart = new Chart(ctx,{ //eslint-disable-line
    type: 'bar',
    data: percentageData,
    options: {
      responsive: false
    },
    scales: [{
      ticks: {
        beginAtZero: true
      }
    }]
  });
}


function handleUserClick() {
  var userClick = event.target.id;
  if (userClick === 'left') {
    console.log('user clicked left');
    votingRound++;
    console.log('voting round: ' + votingRound);
    catalogArray[randomIndex1].tallyClicked++;
    console.log(catalogArray[randomIndex1].imageName + ' clicked: ' + catalogArray[randomIndex1].tallyClicked + ' times');
  }else if (userClick === 'center'){
    console.log('user clicked center');
    votingRound++;
    console.log('voting round: ' + votingRound);
    catalogArray[randomIndex2].tallyClicked++;
    console.log(catalogArray[randomIndex2].imageName + ' clicked: ' + catalogArray[randomIndex2].tallyClicked + ' times');
  }else if (userClick === 'right') {
    console.log('user clicked right');
    votingRound++;
    console.log('voting round: ' + votingRound);
    catalogArray[randomIndex3].tallyClicked++;
    console.log(catalogArray[randomIndex3].imageName + ' clicked: ' + catalogArray[randomIndex3].tallyClicked + ' times');
  }else {
    alert('That\'s not even a picture. Try again.');
  }
  if (votingRound < 25) {
    randomThreePictures();
  }else {
    function saveStuff() {
      var catalogArrayStringified = JSON.stringify(catalogArray);
      localStorage.setItem('catalogArrayStringified', catalogArrayStringified);
    }
    saveStuff();
    myThreePictures.removeEventListener('click', handleUserClick);
    var myButtons = document.getElementById('my_buttons');
    var button = document.createElement('button');
    button.textContent = 'you\'re done so click here';
    myButtons.appendChild(button);
    var restartButton = document.createElement('button');
    restartButton.textContent = 'New vote session';
    myButtons.appendChild(restartButton);
    updateChartArrays();
    button.addEventListener('click', function() {drawClicksChart(); drawPercentageChart();} );
    restartButton.addEventListener('click', function () {
      document.location.reload(true);
    });
  }
}

/////////////////////////////////////////////////

if (localStorage.catalogArrayStringified) {
  var storedData = JSON.parse(localStorage.catalogArrayStringified);
  catalogArray = storedData;

} else {
  makeMyStuff();
}

randomThreePictures();
myThreePictures.addEventListener('click', handleUserClick);
