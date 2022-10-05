import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  Icon?: IconType;
  type?: "text" | "password";
}

const Input = ({ Icon, type = "text", ...props }: InputProps) => {
  return (
    <div className="rounded-xl bg-brand-gray-300 flex px-5 py-2 items-center space-x-2">
      {Icon && (
        <div>
          <Icon />
        </div>
      )}
      <input
        {...props}
        type={type}
        className="outline-0 w-full bg-transparent text-brand-gray-500"
      />
    </div>
  );
};

export default Input;
