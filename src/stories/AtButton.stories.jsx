import { fn } from "@storybook/test";

import AtButton from "../atoms/atButton/AtButton";

export const ActionsData = {
  onClick: fn(),
  
};

export default {
  component: AtButton,
  title: 'Atbutton',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    
        type: 'button',
        variant: 'dark',
        // className,
        size: 'lg',
        // id,
        // onClick,
        children: 'Soy el boton ',
    //   id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
  },
};