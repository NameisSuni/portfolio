"use client";
import React from "react";
import { useTheme } from "../context/themeContext";

const themes = [
  {
    name: "theme-yellow",
    colorClass: "preview-color-yellow-black",
    bg: "light",
  },
  { name: "theme-black", colorClass: "preview-color-black-white", bg: "dark" },
  { name: "theme-pink", colorClass: "preview-color-pink-black", bg: "light" },
  { name: "theme-blue", colorClass: "preview-color-blue-black", bg: "light" },
];

export default function ThemePreview() {
  const { theme, setTheme }: any = useTheme();

  return (
    <div className="preview-themes">
      {themes.map((t) => (
        <button
          key={t.name}
          className={`preview-theme hover:cursor-pointer ${t.colorClass} ${
            theme === t.name ? "active" : ""
          }`}
          title={`Select theme`}
          onClick={() => setTheme(t.name)}
        />
      ))}
    </div>
  );
}
