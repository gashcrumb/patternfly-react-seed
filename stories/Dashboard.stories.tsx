import React from 'react';
import { Dashboard } from '@app/Dashboard/Dashboard';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Components/Dashboard',
  component: Dashboard,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Dashboard {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
