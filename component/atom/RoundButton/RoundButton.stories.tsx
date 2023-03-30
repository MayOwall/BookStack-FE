import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RoundButton from "./RoundButton";

const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default {
  title: "atom/RoundButton",
  component: RoundButton,
  argTypes: {
    children: { control: "text" },
    type: { control: false },
    onClick: { control: false },
    width: { control: "text" },
    height: { control: "text" },
    fontSize: { control: "text" },
    color: { control: { type: "color", presetColors: ["black", "white"] } },
  },
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => (
  <div style={style}>
    <RoundButton {...args} />
  </div>
);

export const Fill = Template.bind({});
Fill.args = {
  children: "RoundButton",
  type: "fill",
  onClick: () => {},
  width: "200px",
  height: "50px",
  color: "#000000",
};
export const Dash = Template.bind({});
Dash.args = {
  children: "RoundButton",
  type: "dash",
  onClick: () => {},
  width: "200px",
  height: "50px",
  color: "#000000",
};
export const Line = Template.bind({});
Line.args = {
  children: "RoundButton",
  type: "line",
  onClick: () => {},
  width: "200px",
  height: "50px",
  color: "#000000",
};
