"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="sketch-border-thin p-2 rounded-sm hover:shadow-[1.5px_1.5px_0px_#222] transition-shadow bg-white"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-gray-600" />
      ) : (
        <Sun className="h-4 w-4 text-orange-500" />
      )}
    </button>
  )
}
