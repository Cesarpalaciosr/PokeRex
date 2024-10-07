import { useEffect, useState } from "react";
import { PokemonGrid } from "../../../utils/TagsStyledComponent";
import MoPokemonCard from "../../molecules/MoPokemonCard/MoPokemonCard";
import AtLoading from '../../atoms/AtLoading/AtLoading';
import OrModal from "../OrModal/orModal";
import { getAllPokemons } from "../../../services/pokemon";
import InfiniteScroll from "react-infinite-scroll-component";


function OrPokemonGrid() {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit] = useState(20); // Establece el límite inicial
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
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };
    
    const handleItemClick = (pokemonItem) => {
        setSelectedItem(pokemonItem);
        setShowModal(true);
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
                        return (
                            <MoPokemonCard key={pokemon.id} pokemon={pokemon} onClick={()=> handleItemClick(pokemon)}/>
                        );
                    }
                )}
                {showModal && (
                    <OrModal pokemon={selectedItem}
                    handleClose={handleCloseModal}
                    >{'Hola mundo'}</OrModal>
                )}
            </PokemonGrid>
        </InfiniteScroll>
    );
}

export default OrPokemonGrid;