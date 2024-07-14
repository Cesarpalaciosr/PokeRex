import { useEffect, useState } from "react";
import styled from "styled-components"
import MoPokemonCard from "../../molecules/moPokemonCard/MoPokemonCard";
import AtLoading from '../../atoms/atLoading/AtLoading';
import { getAllPokemons } from "../../../services/pokemon";
import InfiniteScroll from "react-infinite-scroll-component";

function OrPokemonGrid() {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20); // Establece el límite inicial
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchAllPokemons() {
            setIsLoading(true);
            const p = await getAllPokemons(offset, limit);
            setTimeout(() => {
                setPokemons((prevPokemons) => [...prevPokemons, ...p]);
                setHasMore(p.length === limit);
                setIsLoading(false);
            }, 500); // Delay de 5
        }
        fetchAllPokemons();
    }, [offset, limit]);
    
    const fetchMoreData = () => {
        setOffset((prevOffset) => prevOffset + limit);
    };
    
    
    return (
        <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
        isLoading ? (
            <AtLoading/>
        ) : null
        }
        endMessage={<div>No hay más Pokémon</div>}
        >
            <PokemonGrid>
                {pokemons.map(pokemon =>{
                        return <MoPokemonCard key={pokemon.id} pokemon={pokemon}/>;
                    }
                )}
            </PokemonGrid>
        </InfiniteScroll>
    );
}

    const PokemonGrid = styled.div`
        ${'' /* padding:15px; */}
        display: grid;
        ${'' /* margin: 0  auto 0 auto; */}
        ${'' /* justify-content:center; */}
        justify-items:center;
        grid-template-columns: 
            repeat( 
                auto-fit, 
                minmax(300px, 1fr)
            );
        grid-gap: 10px;
    `;

export default OrPokemonGrid;