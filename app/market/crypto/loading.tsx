import { Loader2Icon } from "lucide-react";

const Loading = () => {
  return (
    <div className="grid min-h-svh animate-pulse place-items-center">
      <Loader2Icon className="size-8 animate-spin" />
    </div>
  );
};

export default Loading;
