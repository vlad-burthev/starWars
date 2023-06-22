import UIButton from "./UIButton";

export default {
  title: "UIButton",
  component: UIButton,
};

const props = {
  text: "Hello",
  onClick: () => console.log("white"),
  disabled: false,
  theme: "light",
  classes: "",
};

export const Dark = {
  args: {
    ...props,
    theme: "dark",
  },
};

export const Light = {
  args: {
    ...props,
    theme: "light",
  },
};

export const Disabled = {
  args: {
    ...props,
    disabled: true,
  },
};
