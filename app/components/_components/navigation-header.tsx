"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationHeader = () => {
  const pathname = usePathname();

  const isIndex = pathname === "/components";

  const href = isIndex ? "/" : "/components";

  return (
    <nav>
      <Button variant="ghost" className="-mx-4" asChild>
        <Link href={href}>
          <ChevronLeftIcon /> Back
        </Link>
      </Button>
    </nav>
  );
};
