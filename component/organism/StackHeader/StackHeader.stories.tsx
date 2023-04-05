import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StackHeader from "./StackHeader";

const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default {
  title: "organism/StackHeader",
  component: StackHeader,
  argTypes: {
    img: { control: "text" },
    bookCount: {
      control: { type: "number", min: 1, max: 99, step: 3 },
    },
    pageCount: {
      control: { type: "number", min: 1, max: 99999, step: 300 },
    },
  },
} as ComponentMeta<typeof StackHeader>;

const Template: ComponentStory<typeof StackHeader> = (args) => (
  <div style={style}>
    <StackHeader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  profileImg: "https://avatars.githubusercontent.com/u/97934878?v=4",
  bookCount: 13,
  pageCount: 27385,
};
