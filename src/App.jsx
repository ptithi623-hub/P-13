import { useState } from "react";
import HashDemo from "./Components/HashDemo";
import MemoryDemo from "./Components/MemoryDemo";
import StaticDemo from "./Components/StaticDemo";

export default function App() {
  const [activeDemo, setActiveDemo] = useState("hash");

  const demos = [
    { id: "hash", label: "HashRouter" },
    { id: "memory", label: "MemoryRouter" },
    { id: "static", label: "StaticRouter" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            React Router Types
          </h1>

          <p className="text-base text-slate-600 sm:text-lg">
            Explore HashRouter, MemoryRouter, and StaticRouter
          </p>
        </header>

        <nav className="mb-6 flex flex-wrap justify-center gap-3">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`rounded-xl px-5 py-3 font-semibold transition ${
                activeDemo === demo.id
                  ? "bg-slate-800 text-white shadow-lg"
                  : "bg-white text-slate-700 shadow hover:bg-slate-200"
              }`}
            >
              {demo.label}
            </button>
          ))}
        </nav>

        <section>
          {activeDemo === "hash" && <HashDemo />}
          {activeDemo === "memory" && <MemoryDemo />}
          {activeDemo === "static" && <StaticDemo />}
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500">
          Built with React, React Router, and Tailwind CSS
        </footer>
      </div>
    </main>
  );
}