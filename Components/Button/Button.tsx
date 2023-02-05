import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  hasError?: boolean;
  bg?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, hasError, bg, color, ...props }) => {
  return (
    <button
      {...props}
      style={{ background: bg, color, borderColor: hasError ? "red" : "green" }}
    >
      {label}
    </button>
  );
};

export default Button;