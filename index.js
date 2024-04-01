"use strict";

// const gender = document.querySelector('.gender');
// const gen = 'male';
let gender = document.querySelector(".gender");
let age = document.querySelector(".age");

//'Click button and BMI Logic'
document.querySelector(".btn").addEventListener("click", function () {
  const weight = Number(document.querySelector(".weight").value);

  console.log(typeof gender);
  //   console.log(age, typeof age);
  //BMI Logic

  if (weight > 0 && weight < 100) {
    let x = weight * 28.5;
    document.querySelector(".calories").textContent = `Calories: ${x}/ day ~`;
  } else {
    // document.querySelector();
    document.querySelector(".calories").textContent =
      "You are missing on something";
  }
});
//'Refresh' button logic
document.querySelector(".refresh").addEventListener("click", function () {
  // gender.textContent = '';
  // document.querySelector('.age').value = '';
  gender.value = "";
  age.value = "";
  document.querySelector(".calories").textContent = "Calories:";
  document.querySelector(".weight").value = "";
});

//Click Button functions for 'Plans'; 'Calories'; 'Subcribe'
//Plans Button Config:
const modal1 = document.querySelector(".modal1");
const overlay1 = document.querySelector(".overlay1");
const btnShowPlans = document.querySelector(".show-plans");
const btnClosePlans = document.querySelector(".close-plans");

const showPlan = function () {
  modal1.classList.remove("hidden1");
  overlay1.classList.remove("hidden1");
};
const closePlan = function () {
  modal1.classList.add("hidden1");
  overlay1.classList.add("hidden1");
};
btnShowPlans.addEventListener("click", showPlan);
btnClosePlans.addEventListener("click", closePlan);
overlay1.addEventListener("click", closePlan);

//Calories Button Config
const modal2 = document.querySelector(".modal2");
const overlay2 = document.querySelector(".overlay2");
const btnOpenCalories = document.querySelector(".show-calories");
const btnCloseCalories = document.querySelector(".close-calories");
const openCalories = function () {
  modal2.classList.remove("hidden2");
  overlay2.classList.remove("hidden2");
};
const closeCalories = function () {
  modal2.classList.add("hidden2");
  overlay2.classList.add("hidden2");
};
btnOpenCalories.addEventListener("click", openCalories);
btnCloseCalories.addEventListener("click", closeCalories);
overlay2.addEventListener("click", closeCalories);

//Subcribe Button Config
const modal3 = document.querySelector(".modal3");
const overlay3 = document.querySelector(".overlay3");
const subBtn = document.querySelector(".show-subscribe");
const closeSubBtn = document.querySelector(".close-subscribe");

const openSub = function () {
  modal3.classList.remove("hidden3");
  overlay3.classList.remove("hidden3");
};
const closeSub = function () {
  modal3.classList.add("hidden3");
  overlay3.classList.add("hidden3");
};
subBtn.addEventListener("click", openSub);
closeSubBtn.addEventListener("click", closeSub);
overlay3.addEventListener("click", closeSub);

//Testing purpose
// const test = document.querySelector(".test");
// test.addEventListener("click", function () {
//   mo.classList.remove("hide");
//   ov.classList.remove("hide");
// });
// btnCloseFat.addEventListener("click", function () {
//   mo.classList.add("hide");
//   ov.classList.add("hide");
// });
// ov.addEventListener("click", function () {
//   mo.classList.add("hide");
//   ov.classList.add("hide");
// });

//The below loop is to configure 3 buttons with the same class name
// for (let i = 0; i < btnShowPlans.length; i++)
//Button check console log
// console.log('button clicked');
// btnShowPlans[i].addEventListener("click", showPlan);

//Escape button code
// document.addEventListener('keydown', function (e) {
//   console.log('a key was pressed');
// });

//2nd logic for home screen
// let gender = document.querySelector(".gender");
// let age = document.querySelector(".age");

//'Click button and BMI Logic'
