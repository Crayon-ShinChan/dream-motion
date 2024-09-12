"use client";

import { ChartThemeProvider } from "@/components/chart-theme-provider";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <ChartThemeProvider>
      <div className="relative mt-6 -mx-6 sm:mx-0 rounded-none sm:rounded-xl border-y sm:border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {children}
      </div>
    </ChartThemeProvider>
  );
}
