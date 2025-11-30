/* ------------------------ DOM ELEMENTS ------------------------ */
const pokeContainer = document.querySelector(".poke-container");
const pokeCount = 151;
const colors = {
  fire: "#F8A88C",
  grass: "#A8D5A2",
  electric: "#F9E4A8",
  water: "#9BB5FE",
  ground: "#E5D4A8",
  rock: "#C9C19B",
  fairy: "#EBB8D0",
  poison: "#C78DC7",
  bug: "#C6D16E",
  dragon: "#A78BFA",
  psychic: "#F8A8C0",
  flying: "#C5B4F3",
  fighting: "#D67873",
  normal: "#C4C2A3",
};
const mainTypes = Object.keys(colors);
console.log(mainTypes);
/* ------------------------ FUNCTIONS ------------------------ */
const fetchPokemons = async () => {
  for (let i = 1; i <= pokeCount; i++) {
    await getPokemon(i);
  }
};
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  createPokemonCard(data);
};
const createPokemonCard = (pokemon) => {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");

  /* ------- AUXILIARES DENTRO DA FUNÇÃO createPokemon ------- */
  // 1) transformando primeira letra do nome do pokemon em upper + cortando a primeira letra do nome lowcase e adicionando o resto do nome;
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  // 2) adicionando os zeros na id
  const id = pokemon.id.toString().padStart(4, "#00");

  // 3) criando o array para os tipos de pokemon e fazendo com o que o tipo que apareça na pokedex seja o main
  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

  // 4) aplicando as cores aos cards
  const color = colors[type];
  pokemonElement.style.backgroundColor = color;

  /* --------------------------------------------------------- */
  const pokemonInnerHTML = `
    <div class="img-container">
        <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
        alt="Bulbasaur"
    />
    </div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="poke-type">Type: <span>${type}</span></small>
    </div>
  `;
  pokemonElement.innerHTML = pokemonInnerHTML;
  pokeContainer.appendChild(pokemonElement);
};

fetchPokemons();
/* ------------------------ EVENT LISTENERS ------------------------ */

/*
1) puxe os elementos do dom, fazendo o objeto cores para acoplar todas as cores dos tipos de pokemon;
2) determine quantos pokemons vão estar na pokedex (151 são os de 1 geração)
3) crie a função fetch que irá percorrer cada pokemon
4) chame a função fetch la embaixo
5) crie a função auxiliar async para puxar os dados da api;
6) crie a função auxiliar para criar os cards
 */
