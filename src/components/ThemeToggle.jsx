import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <button
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-800 text-white hover:bg-gray-600 ring-2 ring-gray-500"
          : "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white hover:shadow-xl"
      }`}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <FaSun className="text-xl" />
      ) : (
        <FaMoon className="text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
