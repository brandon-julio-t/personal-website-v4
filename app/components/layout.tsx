import React from "react";
import { NavigationHeader } from "./_components/navigation-header";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container my-16 flex flex-col gap-4">
      <NavigationHeader />

      <main>{children}</main>
    </section>
  );
};

export default ComponentsLayout;
