import React from "react";

export interface OwlButtonProps {
  label: string;
}

export const OwlButton = (props: OwlButtonProps) => {
  return (
    <button>{"Owl" + props.label}</button>
  );
};

export default OwlButton;
