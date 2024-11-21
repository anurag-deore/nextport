"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeWrapper from "./components/ThemeWrapper";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeProvider>
  );
}
