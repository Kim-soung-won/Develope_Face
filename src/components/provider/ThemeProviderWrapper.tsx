"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useMemo, useState } from "react";
import useThemeStore from "@/stared/store/useLayoutStore";
import createCache from "@emotion/cache";

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

export function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  const themeMode = useThemeStore((state) => state.theme);
  const theme = useMemo(() => createTheme({ palette: { mode: themeMode } }), [themeMode]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // 마운트 전에는 아무것도 렌더링하지 않음(theme 적용 전에 기본으로 렌더링되는 것 방지지)
  if (!mounted) {
    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function createEmotionCache() {
  return createCache({ key: "css" });
}