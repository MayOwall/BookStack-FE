import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default {
  title: "atom/Input",
  component: Input,
  argTypes: {
    type: { control: false },
    value: { control: "text" },
    placeholder: { control: "text" },
    onChange: { control: false },
    label: { control: "text" },
    width: { control: "text" },
    fontSize: { control: "text" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={style}>
    <Input {...args} />
  </div>
);

export const Label = Template.bind({});
Label.args = {
  type: "label",
  value: "",
  placeholder: "입력 해 주세요",
  onChange: () => {},
  label: "라벨",
  width: "300px",
};

export const Default = Template.bind({});
Default.args = {
  type: "default",
  value: "",
  placeholder: "입력 해 주세요",
  onChange: () => {},
  width: "300px",
};
