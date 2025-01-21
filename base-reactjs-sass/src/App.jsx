import { useState } from "react";
import { Alien } from '@phosphor-icons/react';
import viteLogo from "/vite.svg";
import reactLogo from "@assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <h1>React Template</h1>
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <p className="description">
        React template using Sass and Framer Motion with formatter, linter, PWA, meta tags, and development scripts at the ready.
      </p>
      <ul className="feature-list">
        <li>Language: <strong>JavaScript</strong></li>
        <li>Styling: <strong>Sass</strong></li>
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
        <button
          className="button"
          onClick={() => setCount((count) => count + 1)}>
          <Alien weight="duotone" size="24" /> click to increase: {count}
        </button>
    </main>
  );
}

export default App;
