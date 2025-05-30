"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-5 w-full overflow-hidden rounded-full mt-1",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-brandRed h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-medium text-white">
          {Math.round(value || 0)}%
        </span>
      </div>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
