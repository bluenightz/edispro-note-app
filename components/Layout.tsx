import React, { AllHTMLAttributes, DetailedHTMLProps } from "react";
import UserBar from "./UserBar";

const Layout = ({
  children,
}: DetailedHTMLProps<AllHTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div>
      <UserBar />
      {children}
    </div>
  );
};

export default Layout;
