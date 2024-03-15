'use strict';

// const gender = document.querySelector('.gender');
// const gen = 'male';
let gender = document.querySelector('.gender');
let age = document.querySelector('.age');

//'Click button and BMI Logic'
document.querySelector('.btn').addEventListener('click', function () {
  const weight = Number(document.querySelector('.weight').value);

  console.log(typeof gender);
  //   console.log(age, typeof age);
  //BMI Logic
  if (weight > 0 && weight < 100) {
    let x = weight * 28.5;
    document.querySelector('.calories').textContent = `Calories: ${x}/ day ~`;
  } else {
    // document.querySelector();
    document.querySelector('.calories').textContent =
      'You are missing on something';
  }
});
//'Refresh' button logic
document.querySelector('.refresh').addEventListener('click', function () {
  // gender.textContent = '';
  // document.querySelector('.age').value = '';
  gender.value = '';
  age.value = '';
  document.querySelector('.calories').textContent = 'Calories:';
  document.querySelector('.weight').value = '';
});

//Click functions for 'Contest Prep'; Fat loss; Muscle building:
const mo = document.querySelector('.mo');
const ov = document.querySelector('.ov');
const btnCloseFat = document.querySelector('.close-fat');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowPlans = document.querySelectorAll('.show-plans');
const btnFatLoss = document.querySelector('.show-fatLossPlans');
const btnClosePlans = document.querySelector('.close-plans');
const showPlan = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closePlan = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnShowPlans.length; i++)
  //Button check console log
  // console.log('button clicked');
  btnShowPlans[i].addEventListener('click', showPlan);

btnClosePlans.addEventListener('click', closePlan);
overlay.addEventListener('click', closePlan);

const showFatLossPlans = function () {
  mo.classList.remove('hide');
  ov.classList.remove('hide');
};
const closeFatLossPlan = function () {
  mo.classList.add('hide');
  ov.classList.add('hide');
};

btnFatLoss.addEventListener('click', showFatLossPlans);
btnClosePlans.addEventListener('click', closeFatLossPlan);
ov.addEventListener('click', closeFatLossPlan);

//Testing purpose
const test = document.querySelector('.test');
test.addEventListener('click', function () {
  mo.classList.remove('hide');
  ov.classList.remove('hide');
});
btnCloseFat.addEventListener('click', function () {
  mo.classList.add('hide');
  ov.classList.add('hide');
});
ov.addEventListener('click', function () {
  mo.classList.add('hide');
  ov.classList.add('hide');
});

//Escape button code
// document.addEventListener('keydown', function (e) {
//   console.log('a key was pressed');
// });

//Toggle code
