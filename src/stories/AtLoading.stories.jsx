import AtLoading from "../components/atoms/atLoading/AtLoading";

export default {
  component: AtLoading,
  title: 'AtLoading',
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