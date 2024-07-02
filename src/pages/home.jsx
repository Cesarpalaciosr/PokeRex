import OrHeader from "../organisms/orHeader/OrHeader";
import OrPokemonGrid from "../organisms/orPokemonGrid/OrPokemonGrid";
function HomePage () {
    return (
    <>
        <OrHeader/>
        <section>
            <OrPokemonGrid/>
        </section>   
    </>
    )
}

export default HomePage;