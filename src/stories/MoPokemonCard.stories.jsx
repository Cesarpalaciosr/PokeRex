import MoPokemonCard from "../molecules/moPokemonCard/MoPokemonCard";

export default {
    component: MoPokemonCard,
    title: 'MoPokemonCard',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        
  },
};

export const Default = {
    args: {
        pokemon:{
            sprites:{"front_default":'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'}, 
            id: '00003', 
            name: 'venusaur', 
            types: [{slot: 1, type:  
            {name: 'grass'}},{slot:2 , type:{name: 'poison'}}],
        },
        title: 'Test Task',
        state: 'TASK_INBOX',
    },
};