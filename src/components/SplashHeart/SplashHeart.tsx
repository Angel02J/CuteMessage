import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect } from "react";
interface Props {
  onFinish: () => void;
}

export const SplashHeart = ({ onFinish }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br 
      from-rose-50 to-teal-50 dark:from-slate-950 dark:to-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute border border-rose-300 dark:border-rose-500 rounded-full"
            initial={{ width: 80, height: 80, opacity: 0.5 }}
            animate={{ width: 400, height: 400, opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut",
            }}
          />
        ))}

        <motion.div
          className="text-rose-500 dark:text-rose-400 z-10"
          animate={{
            scale: [1, 1.15, 1, 1.15, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart fill="currentColor" size={100} strokeWidth={1} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Preparando algo especial
          </p>
          <div className="w-32 h-0.5 bg-slate-200 dark:bg-slate-800 mt-2 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-rose-400"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
