/* ------------------------ DOM ELEMENTS ------------------------ */
const password = document.querySelector("#password");
const background = document.querySelector("#background");
/* ------------------------ FUNCTIONS ------------------------ */

/* ------------------------ EVENT LISTENERS ------------------------ */
password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
/*
The longer the password, the less blurry the image will be.
*/
