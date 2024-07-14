import OrHeader from "../components/organisms/orHeader/OrHeader";
import OrPokemonGrid from "../components/organisms/orPokemonGrid/OrPokemonGrid";
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