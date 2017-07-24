'use strict'

// Clean up the code below with a single function called `personalIntroduction`
// The new code should have the exact same functionality and output.

var name = "Bob";
var height = "72";
var favoriteColor = "red";
var string = "My name is " + name;
string += ", and my height is " + height;
string += ", and my favorite color is " + favoriteColor;
console.log(string);

var name = "Samantha";
var height = "65";
var favoriteColor = "orange";
var string = "My name is " + name;
string += ", and my height is " + height;
string += ", and my favorite color is " + favoriteColor;
console.log(string);

var name = "Christopher";
var height = "69";
var favoriteColor = "green";
var string = "My name is " + name;
string += ", and my height is " + height;
string += ", and my favorite color is " + favoriteColor;
console.log(string);

var name = "Tamera";
var height = "63";
var favoriteColor = "blue";
var string = "My name is " + name;
string += ", and my height is " + height;
string += ", and my favorite color is " + favoriteColor;
console.log(string);

function personalIntroduction(name, height, favoriteColor) {
     this.name = name
     this.height = height
     this.favoriteColor = favoriteColor

     var string = "My name is " + this.name + ", and my height is " +
     this.height + ", and my favorite color is " + this.favoriteColor

     this.say = function() { return string }
}

var ashleyIntroduction = new personalIntroduction('Ashley', '5ft 7in', 'blue')
console.log(ashleyIntroduction)
console.log(ashleyIntroduction.say())
