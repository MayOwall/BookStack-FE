import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MonthlyStack from "./MonthlyStack";

const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default {
  title: "organism/MonthlyStack",
  component: MonthlyStack,
  argTypes: {
    stackList: { control: false },
  },
} as ComponentMeta<typeof MonthlyStack>;

const Template: ComponentStory<typeof MonthlyStack> = (args) => (
  <div style={style}>
    <MonthlyStack {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  month: "Feb",
  stackType: "stack",
  stackList: [
    {
      id: "",
      no: 1,
      title: "스즈메의 문단속1",
      author: "신카이 마코토",
      date: "2023.03.13",
    },
    {
      id: "",
      no: 2,
      title: "스즈메의 문단속2",
      author: "신카이 마코토",
      date: "2023.03.13",
    },
    {
      id: "",
      no: 2,
      title: "스즈메의 문단속3",
      author: "신카이 마코토",
      date: "2023.03.13",
    },
  ],
  onStackClick: () => {},
};
