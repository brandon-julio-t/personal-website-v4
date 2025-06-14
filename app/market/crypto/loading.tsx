import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="container mx-auto py-6">
      <Skeleton className="h-96 w-full" />
    </main>
  );
};

export default Loading;
