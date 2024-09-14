"use client";

import { ChartThemeProvider } from "@/components/chart-theme-provider";
import { cn } from "@/lib/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ChartThemeProvider>
      <div
        className={cn(
          "relative mt-6 -mx-6 sm:mx-0 rounded-none sm:rounded-xl border-y sm:border border-zinc-200 dark:border-zinc-800 overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </ChartThemeProvider>
  );
}
