import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface MessageSkeletonProps {
  isOwnMessage: boolean;
}

export function MessageSkeleton({ isOwnMessage }: MessageSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex mb-2",
        isOwnMessage ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "flex items-end space-x-2 max-w-[85%]",
          isOwnMessage && "flex-row-reverse space-x-reverse",
        )}
      >
        <Skeleton className="w-6 h-6 rounded-full" />
        <div
          className={cn(
            "flex flex-col space-y-1",
            isOwnMessage ? "items-end" : "items-start",
          )}
        >
          <Skeleton className="h-3 w-16" />
          <Skeleton
            className={cn(
              "h-12 w-48 rounded-lg",
              isOwnMessage ? "rounded-br-none" : "rounded-bl-none",
            )}
          />
        </div>
      </div>
    </motion.div>
  );
}
