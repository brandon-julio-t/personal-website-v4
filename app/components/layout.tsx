import React from "react";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="container my-4">{children}</main>;
};

export default ComponentsLayout;
