import AtButton from '../atoms/atButton/AtButton';
import LoadingAtom from '../atoms/atLoading/AtLoading';
import { getAllPokemons } from '../services/pokemon';

function Poke(){
    function handleClick () {
        console.log('hola');
    }
    function handleGetAllPokemons() {
        getAllPokemons();
    }
    return(
        <div style={{
            display:"grid",
            justifyContent:"center",
            width:"100vw",
            height:"100vh",
            alignItems:"center",
            margin: "0",
            textAlign: "center",

// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
//   transition: filter 300ms;
// }
// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }
// .logo.react:hover {
//   filter: drop-shadow(0 0 2em #61dafbaa);
// }

        }}>
                <h1 style={{
                    display:"block",
                }}>Hola mundo</h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: 'repeat(3, 1fr)',
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
            }}>
                <AtButton variant="light">Light</AtButton>
                <AtButton variant="light" size="md">Light</AtButton>
                <AtButton variant="light" size="lg">Light</AtButton>
                <AtButton variant="dark">Dark</AtButton>
                <AtButton variant="dark" size = "md">Dark</AtButton>
                <AtButton variant="dark" size = "lg">Dark</AtButton>
                <AtButton variant="moves">Movimientos</AtButton>
                <AtButton variant="moves" size="md">Movimientos</AtButton>
                <AtButton variant="moves" size="lg">Movimientos</AtButton>
                <AtButton variant="locations">Lugares</AtButton>
                <AtButton variant="locations" size="md">Lugares</AtButton>
                <AtButton variant="locations" size="lg">Lugares</AtButton>
                <AtButton variant="evolutions">Evoluciones</AtButton>
                <AtButton variant="evolutions" size="md">Evoluciones</AtButton>
                <AtButton variant="evolutions" size="lg">Evoluciones</AtButton>
                <AtButton type="button" variant="test" onClick={handleClick} size="sm">Hola</AtButton>
                <AtButton type="button" variant="test" onClick={handleClick} size="md">Hola</AtButton>
                <AtButton type="button" variant="test" onClick={handleClick} size="lg">Hola</AtButton>
                <AtButton type="button" variant="redirection" onClick={handleGetAllPokemons} size="sm" >Hola</AtButton>
                <AtButton type="button" variant="redirection" onClick={handleClick} size="md">Hola</AtButton>
                <AtButton type="button" variant="redirection" onClick={handleClick} size="lg">Hola</AtButton>
                
            </div>
        <LoadingAtom></LoadingAtom>
        </div>
    )
}

// const PokeTestStyle = styled.div`
// `;

export default Poke;