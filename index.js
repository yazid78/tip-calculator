const amount = document.querySelector(".amount");
const bill = document.getElementById("bill");
const people = document.getElementById("people");
const btnPercentage = document.querySelectorAll(".tip-btn");
const errorElement = document.querySelector(".error");
const btnRandom = document.querySelector(".tip-input");
const reset = document.getElementById("reset-btn");

let billPrice;
let percentage;
let peopleNb;
let btnRandomNb;
let customPercentageActive = false;

bill.addEventListener("input", (e) => {
  billPrice = parseFloat(e.target.value);
  Amount();
});

people.addEventListener("input", (e) => {
  peopleNb = parseFloat(e.target.value);
  console.log(peopleNb, "peoplenb");
  Amount();
});

btnRandom.addEventListener("input", (e) => {
  btnRandomNb = parseFloat(e.target.value);
  btnRandomNb = btnRandomNb / 100;
  customPercentageActive = true;
  console.log("test", btnRandomNb);
  if (billPrice > 0) {
    Error();
  }
  Amount();
});

for (let i = 0; i < btnPercentage.length; i++) {
  btnPercentage[i].addEventListener("click", (e) => {
    percentage = e.target.textContent;
    percentage = parseFloat(percentage.replace("%", " ")) / 100;
    console.log(percentage);
    customPercentageActive = false;
    if (billPrice > 0) {
      Error();
    }

    Amount();
  });
}

function Amount() {
  let appliedPercentage = customPercentageActive ? btnRandomNb : percentage;
  let resultat = (amount.textContent = (billPrice * appliedPercentage) / peopleNb);
}

function Error() {
  errorElement.style.display = "block";
}

reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  btnRandom.value = "";
  amount.textContent = "0";
  billPrice = null;
  peopleNb = null;
  btnRandomNb = null;
  percentage = null;
  customPercentageActive = false;
  errorElement.style.display = "none";
});
