import type { PokemonListResponse } from "../interfaces/types.js";

export async function fetchPokemon(): Promise<PokemonListResponse> {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon.");
  }

  const data: PokemonListResponse = await response.json();

  return data;
}