import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div>
      <Toggle onClick={toggleTheme}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
