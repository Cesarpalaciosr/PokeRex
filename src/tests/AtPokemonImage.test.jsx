// import { fireEvent, render } from "@testing-library/react";
import { /*fireEvent,*/ render } from "@testing-library/react";
import { describe, it} from "vitest";
import AtPokemonImage from "../components/atoms/AtPokemonImage/AtPokemonImage";

describe('AtPokemonImage', () => {
    
    it('should render the AtLoading with the correct props', () => {
        // const mockFn = vi.fn();
        render(
            <AtPokemonImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"/>)});
})