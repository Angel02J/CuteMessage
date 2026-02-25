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
];

export const CuteMessages = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const nextMessage = () => {
    setIndex((prev) => (prev + 1) % messages.length);
  };

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
      flex flex-col items-center justify-center p-4 font-sans"
    >
      <div className="flex gap-4 mb-8 text-rose-400">
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
        className="max-w-md w-full bg-white/80 backdrop-blur-md 
        rounded-xl shadow-xl border border-rose-100 p-8 text-center
        relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-full h-1 
          bg-linear-to-r from-rose-300 to-teal-300"
        />

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-2xl md:text-3xl font-medium text-slate-700 
            leading-relaxed min-h-30 flex items-center justify-center"
          >
            "{messages[index]}"
          </motion.p>
        </AnimatePresence>

        <div className="mt-8 space-y-4">
          <button
            onClick={nextMessage}
            className="w-full bg-rose-500 hover:bg-rose-600 
            text-white font-semibold py-4 rounded-2xl transition-all 
            shadow-lg shadow-rose-200 active:scale-95 hover:cursor-pointer"
          >
            Siguiente Mensaje
          </button>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`text-sm font-medium transition-colors ${isAutoPlay ? "text-teal-600" : "text-slate-400"}`}
          >
            {isAutoPlay
              ? "⏸ Modo automático activado"
              : "▶ Activar modo automático"}
          </button>
        </div>
      </motion.div>

      <div className="mt-12 flex gap-6 text-slate-400">
        <div className="flex flex-col items-center gap-1">
          <Sun size={20} />
          <span className="text-[10px] uppercase tracking-widest">Mañana</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-rose-300">
          <Coffee size={20} />
          <span className="text-[10px] uppercase tracking-widest">Pause</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Moon size={20} />
          <span className="text-[10px] uppercase tracking-widest">Noche</span>
        </div>
      </div>
    </div>
  );
};
