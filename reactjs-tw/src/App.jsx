import { useState } from "react";
import { Alien } from '@phosphor-icons/react';
import viteLogo from "/vite.svg";
import reactLogo from "@assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-semibold">React Template</h1>
      <div className="flex gap-2">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="w-[35ch] text-sm text-gray-400 text-center max-w-md">
        React template using Tailwind and Framer Motion with formatter, linter, PWA, meta tags, and development scripts at the ready.
      </p>
      <ul className="text-xs text-center text-gray-200">
        <li>Language: <strong>JavaScript</strong></li>
        <li>Styling: <strong>Tailwind</strong></li>
        <li>Icons: <strong>Phosphor Icons</strong></li>
        <li>Animations: <strong>Framer Motion</strong></li>
        <li>Build Tool: <strong>Vite</strong></li>
        <li>Formatting: <strong>Prettier</strong></li>
        <li>Linting: <strong>ESLint</strong></li>
        <li>Git Hooks: <strong>Husky</strong></li>
        <li>PWA Support: <strong>Vite PWA</strong></li>
        <li>Path Aliases: <strong>@components, @assets</strong></li>
        <li>Development: <strong>ngrok</strong></li>
      </ul>
      <div>
        <button
          className="flex items-center gap-1 text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-hidden focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => setCount((count) => count + 1)}>
          <Alien weight="duotone" size="24" /> click to increase: {count}
        </button>
      </div>
    </main>
  );
}

export default App;
