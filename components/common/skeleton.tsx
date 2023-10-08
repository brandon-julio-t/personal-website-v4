import { ComponentProps, FunctionComponent } from "react";

const Skeleton: FunctionComponent<ComponentProps<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`${className} animate-pulse rounded-xl bg-slate-700`}
    ></div>
  );
};

export default Skeleton;
