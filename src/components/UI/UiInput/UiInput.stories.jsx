import { useState } from "react";
import UiInput from "./UiInput";

export default {
  title: "UiInput",
  component: UiInput,
};

const Template = () => {
  const [value, setValue] = useState("");

  return (
    <UiInput
      placeholder="placeholder"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClick={() => setValue("")}
    />
  );
};

export const Default = {
  render: () => <Template />,
};
