import { ReactNode } from "react";
import { cn } from "@/utils/cn";

export default function GridBackgroundDemo({children} : {children : ReactNode}) {
  return (
    <div className="relative flex h-200 w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
        )}
      >
        {children}
      </div>
    </div>
  );
}