import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = ({
  children,
  type,
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      type={type}
      className="cursor-pointer bg-brand-yellow min-w-[80px] text-center text-white px-3 py-2 font-bold rounded-md inline-block"
    >
      {children}
    </button>
  );
};

export default Button;
