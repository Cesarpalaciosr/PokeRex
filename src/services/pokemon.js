import axios from "axios";
const BaseURL = import.meta.env.VITE_BASEURL;

async function getAllPokemons(offset, limit) {
  
    // const offset = 0;
    // const limit = 75;
    const {data: pokemons} = await axios.get(`${BaseURL}/pokemon?offset=${offset}&limit=${limit}`);
    //PROMISE.ALL 
    const detailPokemons = await Promise.all(pokemons.results.map(async pokemon => {
        const {data: detailPokemon } = await axios.get(`${BaseURL}/pokemon/${pokemon.name}`); 
        return detailPokemon;
    }))
    console.log({detailPokemons});
    return detailPokemons;
    }

export {
    BaseURL,
    getAllPokemons,
}