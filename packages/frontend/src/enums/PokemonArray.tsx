const pokemonArray = [
  {
    name: "Bulbasaur",
    image: "bulbasaur.png",
    type: ["Grass", "Poison"]
  },
  {
    name: "Charmander",
    image: "bulbasaur.png",
    type: ["Fire"]
  },
  {
    name: "Squirtle",
    image: "bulbasaur.png",
    type: ["Grass", "Poison"]
  },
  {
    name: "Pikachu",
    image: "bulbasaur.png",
    type: ["Electric"]
  },
  {
    name: "Charizard",
    image: "bulbasaur.png",
    type: ["Fire"]
  }
];

export const getPokemon = () => {
  return pokemonArray;
};
