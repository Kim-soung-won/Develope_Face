"use client";
import Switch from "@mui/material/Switch";
import useThemeStore from "@/stared/store/useLayoutStore";

export default function ThemeToggleSwitch() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      inputProps={{ "aria-label": "theme toggle" }}
    />
  );
}
