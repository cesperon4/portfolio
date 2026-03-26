import ReactQueryProvider from "./react-query-provider";

import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReactQueryProvider>
  );
}
