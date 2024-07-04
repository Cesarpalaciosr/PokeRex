import OrHeader from "../organisms/orHeader/OrHeader";


export default {
  component: OrHeader,
  title: 'OrHeader',
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