import { ComponentProps, FunctionComponent } from "react";

const Card: FunctionComponent<ComponentProps<"div">> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`rounded-xl border border-black border-opacity-10 px-8 py-4 shadow-sm backdrop-blur-xs transition-all hover:shadow-md hover:backdrop-blur-sm dark:border-neutral-400 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
