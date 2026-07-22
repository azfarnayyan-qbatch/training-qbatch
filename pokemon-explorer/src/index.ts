import { fetchPokemon } from "./api/pokemon-api.js";

async function main() {
  let loading = true;

  console.log("Loading:", loading);

  try {
    // Fetch Pokémon list using your existing API function
    const data = await fetchPokemon();

    console.log("\n===== Pokemon List =====");

    data.results.forEach((pokemon, index) => {
      console.log(`${index + 1}. ${pokemon.name}`);
    });

    // Search & Filter
    const search = "char";

    const filteredPokemon = data.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    console.log(`\n===== Search Result ("${search}") =====`);

    filteredPokemon.forEach((pokemon) => {
      console.log(pokemon.name);
    });

    // Promise.all() Example
    console.log("\n===== Promise.all() Example =====");

    const [pokemonData, berryData] = await Promise.all([
      fetch("https://pokeapi.co/api/v2/pokemon?limit=5").then((res) =>
        res.json()
      ),
      fetch("https://pokeapi.co/api/v2/berry?limit=5").then((res) =>
        res.json()
      ),
    ]);

    console.log("\nFirst 5 Pokémon:");
    pokemonData.results.forEach((pokemon: { name: string }) => {
      console.log(pokemon.name);
    });

    console.log("\nFirst 5 Berries:");
    berryData.results.forEach((berry: { name: string }) => {
      console.log(berry.name);
    });

  } catch (error) {
    console.error("Something went wrong:", error);
  } finally {
    loading = false;
    console.log("\nLoading:", loading);
  }
}

main();
