import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NumericalData from "./NumericalData";

const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default {
  title: "atom/NumericalData",
  component: NumericalData,
  argTypes: {
    label: { control: "text" },
    data: { control: { type: "number", min: 1, max: 50000, step: 100 } },
  },
} as ComponentMeta<typeof NumericalData>;

const Template: ComponentStory<typeof NumericalData> = (args) => (
  <div style={style}>
    <NumericalData {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Books",
  data: 32758,
};
