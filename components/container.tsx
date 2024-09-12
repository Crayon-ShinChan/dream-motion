"use client";

import { ChartThemeProvider } from "@/components/chart-theme-provider";
import { Bleed } from "nextra-theme-docs";
import { isMobile } from "react-device-detect";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <ChartThemeProvider>
      {isMobile ? (
        <Bleed full={false}>
          <div className="relative border-y border-zinc-200 dark:border-zinc-800 overflow-hidden">
            {children}
          </div>
        </Bleed>
      ) : (
        <div className="relative rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          {children}
        </div>
      )}
    </ChartThemeProvider>
  );
}
