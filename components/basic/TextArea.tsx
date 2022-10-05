import React, { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const TextArea = ({ ...props }: TextAreaProps) => {
  return (
    <div className="rounded-xl bg-brand-gray-300 flex px-5 py-2 items-center space-x-2">
      <textarea
        {...props}
        rows={8}
        className="resize-none outline-0 w-full bg-transparent text-brand-gray-500"
      ></textarea>
    </div>
  );
};

export default TextArea;
