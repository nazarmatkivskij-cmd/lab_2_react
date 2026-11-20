import { useEffect, useState } from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function getInitialThemeByTime() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? "light" : "dark";
}

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(getInitialThemeByTime());
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isDark = theme === "dark";

  return (
    <div
      className={
        isDark
          ? "dark dark-mode bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-8 transition-colors"
          : "bg-slate-100 text-slate-900 min-h-screen py-8 px-4 sm:px-8 transition-colors"
      }
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-300/60 bg-white/80 px-4 py-2.5 text-slate-900 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100">
          <span className="text-sm font-medium">
            Поточна тема: {isDark ? "Темна (dark)" : "Світла (light)"}
          </span>
          <button
            type="button"
            onClick={handleToggleTheme}
            className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            {isDark ? "Світла тема" : "Темна тема"}
          </button>
        </div>

        <Header />
        <main>
          <Experience />
          <Skills />
          <Education />
          <Reviews />
        </main>
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
