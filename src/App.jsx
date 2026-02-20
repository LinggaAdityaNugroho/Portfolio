import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  FaCode,
  FaArrowRight,
  FaSun,
  FaMoon,
  FaLanguage,
  FaHome,
  FaUser,
} from "react-icons/fa";

// Import halaman & komponen
import Home from "./pages/Home";
import About from "./pages/About";
import Divider from "./components/Atoms/Divider/Divider";
import ContactCard from "./components/ContactCard";
import { translations } from "./data/translations";

function App() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const getYear = new Date().getFullYear();

  // State Bahasa
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const t = translations[lang];

  // Mencegah Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "id" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // Data Navigasi menggunakan teks dari translations
  const dataSidebar = [
    { icon: <FaHome />, href: "#home", title: t.home },
    { icon: <FaUser />, href: "#about", title: t.about },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-300 transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-6 py-8 md:px-10 md:py-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* --- SIDEBAR --- */}
        <aside className="md:col-span-1 space-y-8 md:sticky md:top-10 md:h-fit">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="/img/profile.png"
                alt="Lingga Aditya"
                className="relative rounded-full w-28 h-28 object-cover border-4 border-neutral-100 dark:border-neutral-900 shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-neutral-900 dark:text-white font-bold text-xl tracking-tight">
                Lingga Aditya
              </h3>
              <p className="text-neutral-500 text-sm font-medium">@lingdty._</p>
            </div>
          </div>

          {/* Quick Actions (Theme & Language) */}
          <div className="flex gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex-1 flex items-center justify-center gap-2 text-[10px] font-bold py-3 px-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
            >
              {theme === "dark" ? (
                <>
                  <FaSun className="text-yellow-500" /> LIGHT
                </>
              ) : (
                <>
                  <FaMoon className="text-blue-600" /> DARK
                </>
              )}
            </button>

            {/* <button
              onClick={toggleLanguage}
              className="flex-1 flex items-center justify-center gap-2 text-[10px] font-bold py-3 px-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
            >
              <FaLanguage className="text-emerald-500 text-sm" />
              <span className={lang === "id" ? "text-blue-500" : ""}>ID</span>
              <span className="opacity-20">/</span>
              <span className={lang === "en" ? "text-blue-500" : ""}>EN</span>
            </button> */}
          </div>

          <Divider className="opacity-50" />

          {/* Navigation Menu */}
          <nav className="flex flex-col gap-2">
            {dataSidebar.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center justify-between px-4 py-3 rounded-xl border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-neutral-400 group-hover:text-blue-500 transition-colors">
                    {item.icon}
                  </span>
                  <span className="font-semibold text-sm group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </div>
                <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
              </a>
            ))}
          </nav>

          <Divider className="opacity-50" />

          {/* Contact Card terintegrasi */}
          <ContactCard t={t} />

          <Divider className="opacity-50" />

          {/* Sidebar Footer */}
          <footer className="text-center space-y-1 py-2">
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600">
              COPYRIGHT © {getYear}
            </p>
            <p className="text-[11px] text-neutral-500 font-medium">
              Lingga Aditya. All rights reserved.
            </p>
          </footer>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="md:col-span-3 space-y-24 scroll-smooth">
          <section
            id="home"
            className="animate-in fade-in slide-in-from-bottom-6 duration-1000"
          >
            {/* Mengirim data transkrip ke halaman Home */}
            <Home t={t} />
          </section>

          <Divider />

          <section id="about" className="pb-20">
            {/* Mengirim data transkrip ke halaman About */}
            <About t={t} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
