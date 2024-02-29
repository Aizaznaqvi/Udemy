// Twetter slicer function
// ------------------------------------------------------------------------------
var tweet = prompt("Write your Tweet");
var tweetcount = tweet.length;
var slicedtweet = tweet.slice(0, 140);
var lostwords = 140 - tweetcount;
alert("You have written : " + tweetcount + " character" + " and lost " + lostwords + ": Tweet "+ slicedtweet);

var tweet = prompt("Write your Tweet");
var slicedtweet = tweet.slice(0, 140);
alert(slicedtweet);
// ------------------------------------------------------------------------------

// To change cases of the contant
// ------------------------------------------------------------------------------
var myName = "AizazNaqvi";
myName.toUpperCase{};
// ------------------------------------------------------------------------------

// To change cases of 1st letter of the words
// ------------------------------------------------------------------------------
var name = prompt("Write your name");
var firstCh = name.slice(0,1);
var remaining = name.slice(1);
var firstChLarge = firstCh.toUpperCase();
var secChsmall = remaining.toLowerCase();
alert("Hello, " + firstChLarge + secChsmall);
// ------------------------------------------------------------------------------

// Dog age calculater comparing human.
// ------------------------------------------------------------------------------
var dogAge = prompt("Enter your dog Age");
var humanAge = (dogAge -2) * 4 + 21;
alert("Humane Age of Dog : " + humanAge);
// ------------------------------------------------------------------------------

// Unknown
// ------------------------------------------------------------------------------
var num = 12;
num /= 3;

var a = 16 % 4;

var x = 3;
var y = x++;
y += 1;
// ------------------------------------------------------------------------------

// Robot function
// ------------------------------------------------------------------------------
function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log(
    "Buy : " + calcBottles(money, costPerBottle) + " bottles of Milk"
  );
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}

console.log("Hello Aizaz, Here is your :" + getMilk(5, 3) + " change");
// console.log("Hello Aizaz, Here is your :" + getMilk(5) + " change");
// ------------------------------------------------------------------------------

// Robot function to buy milk
// ------------------------------------------------------------------------------
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");

  var buyBottels = Math.floor(money / 1.5);
  console.log("Buy : " + buyBottels+ " bottels of Milk");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(5);
// ------------------------------------------------------------------------------

// days, weeks and months calculater
// ------------------------------------------------------------------------------
function lifeInWeeks(age) {
  var totalAge = 70;
  var days = (totalAge - age)* 365;
  var weeks = (totalAge - age)* 52;
  var months = (totalAge - age)* 12;

  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
}
lifeInWeeks(18);
// ------------------------------------------------------------------------------

// Robot by milk function
// ------------------------------------------------------------------------------
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("Buy : " + calcBottles(money, 1.5) + " bottles of Milk");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 2;
}

function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}
getMilk(22);
// ------------------------------------------------------------------------------

// rendom number generator used for Ludo Dice Roll
// ------------------------------------------------------------------------------
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);
// ------------------------------------------------------------------------------

// BMI Calculator
// ------------------------------------------------------------------------------
function bmiCalculator(weight, height) {
  bmi = weight / Math.pow(height, 2);
  return Math.floor(bmi);
}

console.log("Your Bmi is : " + bmiCalculator(65, 1.8));
var bmi = bmiCalculator(65, 1.8);
// ------------------------------------------------------------------------------
