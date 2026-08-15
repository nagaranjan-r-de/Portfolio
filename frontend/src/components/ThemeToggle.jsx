import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={18} className="moon-icon" />
      ) : (
        <Sun size={18} className="sun-icon" />
      )}
    </button>
  );
}