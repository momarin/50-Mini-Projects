/* ------------------------ DOM ELEMENTS ------------------------ */
const boxesContainer = document.querySelector(".boxes");
const btn = document.querySelector(".btn");
/* ------------------------ FUNCTIONS ------------------------ */
/* 1) we need to create four boxes for each row */
function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;

      boxesContainer.appendChild(box);
    }
  }
}
createBoxes();
/* ------------------------ EVENT LISTENERS ------------------------ */
btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));
