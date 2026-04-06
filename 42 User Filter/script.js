/* ------------------------ DOM ELEMENTS ------------------------ */
const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
/* ------------------------ starting functions ------------------------ */
getData();
/* ------------------------ FUNCTIONS ------------------------ */
async function getData() {
  const response = await fetch("https://randomuser.me/api?results=30");
  const { results } = await response.json();

  // cleaning result
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    // criando a lista
    listItems.push(li);
    // adicionando ao html
    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    // adicionando a const result
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
/* ------------------------ EVENT LISTENERS ------------------------ */
filter.addEventListener("input", (e) => filterData(e.target.value));

/* ------------------------ DEMAIS INSTRUÇÕES ------------------------ */
/* caso quisesse chamar apenas usuários de um genero, adicionaria no http da async function o parametro gender, ficando assim: https://randomuser.me/api?results=30&gender=female */
