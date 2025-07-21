"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-orange-100 dark:bg-slate-800 transition-colors duration-200 ease-in-out focus:outline-none"
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <button 
        aria-label="Toggle theme"
        className={`absolute inline-flex h-[26px] w-[26px] transform items-center justify-center rounded-full bg-white shadow-md ring-0 transition-transform duration-300 ease-in-out ${
          theme === 'dark' ? 'translate-x-[30px] dark:bg-slate-600' : 'translate-x-0'
        }`}
        
      >
        {theme === "light" ? (
          <Sun className="h-4 w-4 text-orange-500" />
        ) : (
          <Moon className="h-4 w-4 text-blue-400" />
        )}
      </button>
    </div>
  )
}