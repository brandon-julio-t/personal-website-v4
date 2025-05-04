import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, PropsWithChildren } from "react";

export function TypographyH1({
  children,
  className,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"h1">) {
  const Comp = asChild ? Slot : "h1";

  return (
    <Comp
      className={cn(
        "text-foreground scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function TypographyH2({
  children,
  className,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"h2">) {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp
      className={cn(
        "text-foreground scroll-m-20 text-3xl font-medium tracking-tight",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function TypographyH3({
  children,
  className,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"h3">) {
  const Comp = asChild ? Slot : "h3";
  return (
    <Comp
      className={cn(
        "text-foreground scroll-m-20 text-2xl font-medium tracking-tight",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function TypographyH4({
  children,
  className,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"h4">) {
  const Comp = asChild ? Slot : "h4";
  return (
    <Comp
      className={cn(
        "text-foreground scroll-m-20 text-xl font-medium tracking-tight",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function TypographyP({
  className,
  children,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"p">) {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp className={cn("text-foreground text-base/relaxed", className)}>
      {children}
    </Comp>
  );
}

export function TypographyList({
  children,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"ul">) {
  const Comp = asChild ? Slot : "ul";
  return (
    <Comp className="text-foreground my-6 ml-6 list-disc [&>li]:mt-2">
      {children}
      {/* <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li> */}
    </Comp>
  );
}

export function TypographyLead({
  children,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"p">) {
  const Comp = asChild ? Slot : "p";
  return <Comp className="text-muted-foreground text-xl">{children}</Comp>;
}

export function TypographyLarge({
  children,
  className,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"div">) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp className={cn("text-foreground text-lg font-medium", className)}>
      {children}
    </Comp>
  );
}

export function TypographySmall({
  children,
  className,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"small">) {
  const Comp = asChild ? Slot : "small";
  return (
    <Comp className={cn("text-foreground text-sm font-medium", className)}>
      {children}
    </Comp>
  );
}

export function TypographyMuted({
  children,
  className,
  asChild,
}: PropsWithChildren<{ asChild?: boolean }> & ComponentProps<"p">) {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp className={cn("text-muted-foreground text-sm", className)}>
      {children}
    </Comp>
  );
}
