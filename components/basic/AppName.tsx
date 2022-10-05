import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { BiArrowBack } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

type AppNameProps = {
  backButton?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const AppName = ({ children, className, backButton = false }: AppNameProps) => {
  const cn = twMerge("text-brand-yellow text-3xl text-center", className);
  return (
    <div className={cn}>
      {backButton && (
        <Link href="/notes">
          <a className="flex items-center text-2xl space-x-3">
            <BiArrowBack />
          </a>
        </Link>
      )}
      {children}
    </div>
  );
};

export default AppName;
