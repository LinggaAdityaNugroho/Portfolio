import { Skeleton } from "../../ui/skeleton";

export function SkeletonCard(className) {
  return (
    <div>
      <Skeleton className={`w-full h-30 rounded-xl ${className}`} />
    </div>
  );
}
