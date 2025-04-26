import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

export function TypographyH1({
  children,
  className,
}: PropsWithChildren & ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-foreground scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
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
        "text-foreground scroll-m-20 text-3xl font-semibold tracking-tight",
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
        "text-foreground scroll-m-20 text-2xl font-semibold tracking-tight",
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
        "text-foreground scroll-m-20 text-xl font-semibold tracking-tight",
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
  return <p className="text-foreground leading-7">{children}</p>;
}

export function TypographyList({
  children,
}: PropsWithChildren & ComponentProps<"ul">) {
  return (
    <ul className="text-foreground my-6 ml-6 list-disc [&>li]:mt-2">
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
  return <p className="text-muted-foreground text-xl">{children}</p>;
}

export function TypographyLarge({
  children,
  className,
}: PropsWithChildren & ComponentProps<"div">) {
  return (
    <div className={cn("text-foreground text-lg font-semibold", className)}>
      {children}
    </div>
  );
}

export function TypographySmall({
  children,
  className,
}: PropsWithChildren & ComponentProps<"small">) {
  return (
    <small className={cn("text-foreground text-sm font-medium", className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({
  children,
  className,
}: PropsWithChildren & ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
  );
}
