import React from "react";
import { NavigationHeader } from "./_components/navigation-header";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container my-6 flex max-w-2xl flex-col gap-2 md:my-8 lg:my-16 xl:my-24">
      <NavigationHeader />

      <main>{children}</main>
    </section>
  );
};

export default ComponentsLayout;
