import AtPokemonInfo from "../components/atoms/atPokemonInfo/AtPokemonInfo";

export default {
  component: AtPokemonInfo,
  title: 'AtPokemonInfo',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    
  },
};

export const Default = {
  args: {
    
    PokemonId: '00003', PokemonName: 'venusaur', PokemonTypes: [{slot: 1, type:  
        {name: 'grass'}},{slot:2 , type:{name: 'poison'}}],
      title: 'Test Task',
      state: 'TASK_INBOX',
  },
};