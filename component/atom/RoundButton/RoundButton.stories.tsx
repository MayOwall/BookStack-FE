import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RoundButton from "./RoundButton";

export default {
  title: "atom/RoundButton",
  component: RoundButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => (
  <RoundButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "123",
  type: "fill",
  onClick: () => {},
};
