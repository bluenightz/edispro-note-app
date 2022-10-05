import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const AppName = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  const cn = twMerge("text-brand-yellow text-3xl text-center", className);
  return <div className={cn}>{children}</div>;
};

export default AppName;
