import OrPokemonGrid from "../organisms/orPokemonGrid/OrPokemonGrid";


export default {
  component: OrPokemonGrid,
  title: 'OrPokemongrid',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    
  },
};

export const Default = {
  args: {
        title: 'Test Task',
        state: 'TASK_INBOX',
  },
};