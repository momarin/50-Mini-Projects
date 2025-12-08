/* ------------------------ DOM ELEMENTS ------------------------ */
const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");
/* ------------------------ FUNCTIONS ------------------------ */
function hideAllContent() {
  contents.forEach((content) => content.classList.remove("show"));
}
function hideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}
/* ------------------------ EVENT LISTENERS ------------------------ */
listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    hideAllContent();
    hideAllItems();

    contents[index].classList.add("show");
    item.classList.add("active");
  });
});
