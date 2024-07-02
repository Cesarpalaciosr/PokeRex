import { useEffect, useState } from "react";
import styled from "styled-components"
import MoPokemonCard from "../../molecules/moPokemonCard/MoPokemonCard";
import { getAllPokemons } from "../../services/pokemon";

function OrPokemonGrid() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        async function fetchAllPokemoms() {
            const p = await getAllPokemons();
            setPokemons(p);
        }
        fetchAllPokemoms();
    }, []);
    
    return (
        <PokemonGrid>
            {pokemons.map(pokemon =>{
                    return <MoPokemonCard key={pokemon.id} pokemon={pokemon}/>;
                }
            )}
        </PokemonGrid>
    );

}

    const PokemonGrid = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    `;

export default OrPokemonGrid;