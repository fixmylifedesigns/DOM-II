const siteContent = {
  new: {
    "img-src1": "img/1.gif"
  }
};

// Your code goes here
//buttons
let btn = document.querySelectorAll(".btn");
console.log(btn[0]);
// buttton 1
const signUpBtn1 = btn[0];
signUpBtn1.addEventListener("mouseenter", function(btn1) {
  console.log(`signUpBtn1 enter!`);
  btn1.target.style.color = "blue";
  btn1.target.style.background = "black";
});
signUpBtn1.addEventListener("mouseleave", function(btn1) {
  console.log(`signUpBtn1 leave!`);
  btn1.target.style.color = "white";
});
signUpBtn1.addEventListener("click", function(btn1) {
  console.log(`signUpBtn1 click!`);
  btn1.target.style.color = "white";
  btn1.target.style.background = "teal";
});

// buttton 2
const signUpBtn2 = btn[1];
signUpBtn2.addEventListener("mouseenter", function(btn2) {
  console.log(`signUpBtn2 enter!`);
  btn2.target.style.color = "red";
  btn2.target.style.background = "black";
});
signUpBtn2.addEventListener("mouseleave", function(btn2) {
  console.log(`signUpBtn2 leave!`);
  btn2.target.style.color = "white";
});
signUpBtn2.addEventListener("click", function(btn2) {
  console.log(`signUpBtn2 click!`);
  btn2.target.style.color = "white";
  btn2.target.style.background = "teal";
});

// buttton 3
const signUpBtn3 = btn[2];
signUpBtn3.addEventListener("mouseenter", function(btn3) {
  console.log(`signUpBtn3 enter!`);
  btn3.target.style.color = "green";
  btn3.target.style.background = "black";
});
signUpBtn3.addEventListener("mouseleave", function(btn3) {
  console.log(`signUpBtn3 leave!`);
  btn3.target.style.color = "white";
});
signUpBtn3.addEventListener("click", function(btn3) {
  console.log(`signUpBtn3 click!`);
  btn3.target.style.color = "white";
  btn3.target.style.background = "teal";
});

// body
let container = document.querySelectorAll("body");
console.log(container);
const text = container[0];

text.addEventListener("copy", function(e) {
  e.clipboardData.setData("text/plain", "sorry no copying");
  e.clipboardData.setData("text/html", "<b>Sorry no copying!</b>");
  e.preventDefault();
  e.target.style.background = "pink";
});

// nav
const anchorTag = document.querySelector('a');
anchorTag.addEventListener('click', function(event){
 console.log(`Anchor was clicked!`);
 // This will prevent the form from submitting to action_page.php
  event.preventDefault();
});

const nav = document.querySelector('.main-navigation');
nav.addEventListener("mouseenter", function(navE) {
  console.log(`signUpBtn3 enter!`);
  navE.target.style.color = "green";
  navE.target.style.background = "lightgrey";
});
nav.addEventListener("mouseleave", function(navE) {
  console.log(`signUpBtn3 leave!`);
  navE.target.style.background = "white";
});

// sections
let section = document.querySelectorAll("section");
console.log(section)

const section1 = section[0];

section1.addEventListener('dblclick', function(event){
  event.currentTarget.style.display = "none";
  console.log(event)
});

const section2 = section[1];

section2.addEventListener('dblclick', function(event){
  event.currentTarget.style.display = "none";
  console.log(event)
});

const section3 = section[2];

section3.addEventListener('dblclick', function(event){
  event.currentTarget.style.display = "none";
  console.log(event)
});

