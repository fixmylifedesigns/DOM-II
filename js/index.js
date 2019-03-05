// Your code goes here
//buttons
let btn = document.querySelectorAll(".btn");
console.log(btn[0]);

const signUpBtn1 = btn[0];

// buttton 1
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


let p = document.querySelectorAll("p");
console.log(p)
p.addEventListener("click", function(){

});