import OrHeader from "../components/organisms/OrHeader/OrHeader";
import OrPokemonGrid from "../components/organisms/OrPokemonGrid/OrPokemonGrid";

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