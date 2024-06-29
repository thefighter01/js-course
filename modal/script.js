"use strict";

// modal hidden , show-modal , close-modal

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const btsTest = document.querySelector(".open-modal");

console.log(btsTest);

console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; ++i) {
  // anonymous fucntion , fucntion expression
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  //console.log("key was pressed");
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    console.log("Escape key was pressed");
  }
});
