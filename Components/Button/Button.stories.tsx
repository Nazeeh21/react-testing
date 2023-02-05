import Button from "./Button";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  hasError: false,
  bg: "blue",
  color: "white",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  hasError: false,
  bg: "yellow",
  color: "black",
};

export const ChangeColor = () => {
  const [color, setColor] = React.useState("green");
  const clickHandler = () => {
    setColor((prevColor) => (prevColor === "green" ? "yellow" : "green"));
  };

  return (
    <Button
      label="Click to change Color"
      hasError={false}
      bg={color}
      color={"black"}
      onClick={clickHandler}
    />
  );
};
