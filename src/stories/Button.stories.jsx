import React from 'react';

import Button from '../components/Button';

export default {
  component: Button,
  title: 'Button',
};

const Story = args => <Button {...args} />;

export const Default = Story.bind({});
Default.args = {
  variant: "",
  content: "Test Content",
  clbk: function(){ console.log("HELLO!") }
};


export const Disabled = Story.bind({});
Disabled.args = {
  variant: "disabled",
  content: "Test Content",
  clbk: function(){ console.log("HELLO!") }
};

