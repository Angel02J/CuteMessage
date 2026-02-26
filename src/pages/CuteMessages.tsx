import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Heart, Moon, Sparkles, Sun } from "lucide-react";

const messages = [
  "Eres más capaz de lo que crees.",
  "Tu sonrisa tiene el poder de cambiarle el día a cualquiera.",
  "No olvides que eres prioridad.",
  "Estás haciendo un gran trabajo, paso a paso.",
  "El mundo es un lugar mejor porque tú estás en él.",
  "Confía en tu proceso, vas por buen camino.",
  "Incluso en tus días grises, tu luz sigue siendo increíble.",
  "Mereces todas las cosas bonitas que el universo tiene para ofrecerte.",
];

export const CuteMessages = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const nextMessage = () => {
    setIndex((prev) => (prev + 1) % messages.length);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    let interval: number;
    if (isAutoPlay) {
      interval = setInterval(nextMessage, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <div
      className="min-h-screen bg-linear-to-br from-rose-50 to-teal-50
      dark:from-slate-900 dark:to-slate-800
      flex flex-col items-center justify-center p-4 font-sans"
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/20
        dark:bg-slate-700/50 backdrop-blur-md border border-rose-100
        dark:border-slate-600 transition-all hover:cursor-pointer active:scale-90"
      >
        {darkMode ? (
          <Sun className="text-yellow-400" />
        ) : (
          <Moon className="text-slate-600" />
        )}
      </button>
      <div className="flex gap-4 mb-8 text-rose-400 dark:text-rose-300">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Heart fill="currentColor" size={32} />
        </motion.div>
        <Sparkles size={32} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full backdrop-blur-md 
        rounded-2xl shadow-xl p-8 text-center
        relative overflow-hidden transition-colors duration-500
        bg-white/80 border border-rose-100 
        dark:bg-slate-800/80 dark:border-slate-700 dark:shadow-2xl dark:shadow-black/20"
      >
        <div
          className="absolute top-0 left-0 w-full h-1 
          bg-linear-to-r from-rose-300 to-teal-300 dark:from-rose-500 dark:to-indigo-500"
        />

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-2xl md:text-3xl font-medium leading-relaxed min-h-30 flex items-center justify-center
            text-slate-700 dark:text-slate-100"
          >
            "{messages[index]}"
          </motion.p>
        </AnimatePresence>

        <div className="mt-8 space-y-4">
          <button
            onClick={nextMessage}
            className="w-full font-semibold py-4 rounded-2xl transition-all 
            shadow-lg active:scale-95 hover:cursor-pointer
            bg-rose-500 hover:bg-rose-600 text-white shadow-rose-200
            dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:shadow-none"
          >
            Siguiente Mensaje
          </button>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`text-sm font-medium transition-colors hover:cursor-pointer
              ${isAutoPlay ? "text-teal-600 dark:text-teal-400" : "text-slate-400 dark:text-slate-500"}`}
          >
            {isAutoPlay
              ? "⏸ Modo automático activado"
              : "▶ Activar modo automático"}
          </button>
        </div>
      </motion.div>

      <div className="mt-12 flex gap-8 text-slate-400 dark:text-slate-500">
        <div className="flex flex-col items-center gap-1 transition-colors hover:text-rose-400">
          <Sun size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Mañana
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 text-rose-300 dark:text-rose-400">
          <Coffee size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Pausa
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 transition-colors hover:text-indigo-400">
          <Moon size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Noche
          </span>
        </div>
      </div>
    </div>
  );
};
