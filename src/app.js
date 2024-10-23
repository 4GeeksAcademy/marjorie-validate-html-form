/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function validate() {
  const inputCard = document.querySelector("#inputCard");
  const inputCvc = document.querySelector("#inputCvc");
  const inputAmount = document.querySelector("#inputAmount");
  const inputFirstName = document.querySelector("#inputFirstName");
  const inputLastName = document.querySelector("#inputLastName");
  const inputCity = document.querySelector("#inputCity");
  const inputState = document.querySelector("#inputState");
  const inputPostalcode = document.querySelector("#inputPostalcode");
  const inputCctype = document.querySelector("#inputCctype");
  const inputMessage = document.querySelector("#inputMessage");
  const form = document.querySelector("#form");
  const errorElement = document.querySelector("#error");

  document.querySelector("#alert").classList.add("hidden");
  document.querySelector("#alert").innerHTML = "";

  let messages = [];

  if (inputCard.value.length < 10) {
    messages += `<li>Input a valid Credit Card Number</li>`;
  }
  if (inputCvc.value.length > 3) {
    messages += `<li>Wrong CVC number</li>`;
  }

  if (messages.length >= 3) {
    document.querySelector("#alert").innerHTML = `<ul>${messages}</ul>`;
    document.querySelector("#alert").classList.remove("hidden");
  }
}

document.querySelector("#sendButton").addEventListener("click", e => {
  e.preventDefault();
  validate();
});
