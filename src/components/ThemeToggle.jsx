
import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <button
      className={`px-2 py-1 md:px-4 md:py-2 rounded-lg transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-800 text-white hover:bg-gray-600"
          : "bg-yellow-500 text-black hover:bg-yellow-400"
      }`}
      onClick={toggleTheme}
    >
      {isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );
};

export default ThemeToggle;
