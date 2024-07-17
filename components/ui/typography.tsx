import { cn } from "@/lib/utils";
import { PropsWithChildren, ComponentProps } from "react";

export function TypographyH1({
  children,
  className,
}: PropsWithChildren & ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
}: PropsWithChildren & ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
}: PropsWithChildren & ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
}: PropsWithChildren & ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
}: PropsWithChildren & ComponentProps<"p">) {
  return <p className="leading-7 text-foreground">{children}</p>;
}

export function TypographyList({
  children,
}: PropsWithChildren & ComponentProps<"ul">) {
  return (
    <ul className="my-6 ml-6 list-disc text-foreground [&>li]:mt-2">
      {children}
      {/* <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li> */}
    </ul>
  );
}

export function TypographyLead({
  children,
}: PropsWithChildren & ComponentProps<"p">) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}

export function TypographyLarge({
  children,
  className,
}: PropsWithChildren & ComponentProps<"div">) {
  return (
    <div className={cn("text-lg font-semibold text-foreground", className)}>
      {children}
    </div>
  );
}

export function TypographySmall({
  children,
  className,
}: PropsWithChildren & ComponentProps<"small">) {
  return (
    <small
      className={cn(
        "text-sm font-medium leading-none text-foreground",
        className,
      )}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({
  children,
  className,
}: PropsWithChildren & ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}
