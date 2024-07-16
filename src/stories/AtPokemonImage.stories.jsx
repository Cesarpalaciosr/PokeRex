import AtPokemonImage from "../components/atoms/atPokemonImage/AtPokemonImage";

export default {
    component: AtPokemonImage,
    title: 'AtPokemonImage',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Default = {
    args: {
    
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', 
        title: 'Test Task',
        state: 'TASK_INBOX',
    },
};