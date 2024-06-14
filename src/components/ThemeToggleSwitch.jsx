import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
            theme === 'dark' ? 'transform translate-x-5' : ''
          }`}
        ></div>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Dark Mode
      </span>
    </label>
  );
};

export default ThemeToggleSwitch;
