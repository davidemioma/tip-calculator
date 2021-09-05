"use strict";

//Button
const tip5 = document.querySelector(".tip_5");
const tip10 = document.querySelector(".tip_10");
const tip15 = document.querySelector(".tip_15");
const tip25 = document.querySelector(".tip_25");
const tip50 = document.querySelector(".tip_50");
const resetBtn = document.querySelector(".reset_btn");
const custom = document.querySelector(".tip_custom");

//text
let tipAmount = document.querySelector(".tip_amount");
let totalAmount = document.querySelector(".total_amount");
let text = document.querySelector(".text");
let inputGrp = document.querySelector(".n_ig");

let isActive = true;
let tip = 0;
let total = 0;

function emptyText() {
  const people = document.querySelector(".no_of_people").value;
  if (people === "") {
    text.classList.add("hidden");
    inputGrp.classList.remove("active");
  }
}

function calcCustom() {
  if (isActive) {
    const tipCustom = Number(document.querySelector(".tip_custom").value);
    const noOfPeople = Number(document.querySelector(".no_of_people").value);
    const bill = Number(document.querySelector(".bill").value);
    const value = tipCustom / 100;

    if (noOfPeople <= 0) {
      text.classList.remove("hidden");
      inputGrp.classList.add("active");
    }

    if (noOfPeople > 0 && bill > 0 && value > 0) {
      text.classList.add("hidden");
      inputGrp.classList.remove("active");
      tip += Math.trunc(value * bill * noOfPeople);
      total += Math.trunc(bill * noOfPeople + tip);
      tipAmount.textContent = "$" + tip;
      totalAmount.textContent = "$" + total;
      isActive = false;
    }
  }
}

custom.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calcCustom();
  }
});

function calcBill(value) {
  if (isActive) {
    const noOfPeople = Number(document.querySelector(".no_of_people").value);
    const bill = Number(document.querySelector(".bill").value);

    if (noOfPeople <= 0) {
      text.classList.remove("hidden");
      inputGrp.classList.add("active");
    }

    if (noOfPeople > 0 && bill > 0) {
      text.classList.add("hidden");
      inputGrp.classList.remove("active");
      tip += Math.trunc(value * bill * noOfPeople);
      total += Math.trunc(bill * noOfPeople + tip);
      tipAmount.textContent = "$" + tip;
      totalAmount.textContent = "$" + total;
      isActive = false;
    }
  }
}

tip5.addEventListener("click", function () {
  const value = 0.05;
  calcBill(value);
});

tip10.addEventListener("click", function () {
  const value = 0.1;
  calcBill(value);
});

tip15.addEventListener("click", function () {
  const value = 0.15;
  calcBill(value);
});

tip25.addEventListener("click", function () {
  const value = 0.25;
  calcBill(value);
});

tip50.addEventListener("click", function () {
  const value = 0.5;
  calcBill(value);
});

resetBtn.addEventListener("click", function () {
  isActive = true;
  tip = 0;
  total = 0;
  text.classList.add("hidden");
  document.querySelector(".tip_custom").value = "";
  document.querySelector(".no_of_people").value = "";
  document.querySelector(".bill").value = "";
  document.querySelector(".tip_amount").textContent = "$" + 0.0;
  document.querySelector(".total_amount").textContent = "$" + 0.0;
});
