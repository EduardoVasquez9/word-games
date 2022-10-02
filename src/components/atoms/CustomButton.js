import React from "react";

const CustomButton = ({ disabled, text }) => {
  return <button disabled={disabled}>{text}</button>;
};

export default CustomButton;
