import { ChartThemeProvider } from "@/components/chart-theme-provider";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <ChartThemeProvider>
      <div className="mt-6 relative w-full rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {children}
      </div>
    </ChartThemeProvider>
  );
}
