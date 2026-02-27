import { AnimatePresence, motion } from "framer-motion";
import { CuteMessages } from "./pages/CuteMessages";
import { useState } from "react";
import { SplashHeart } from "./components/SplashHeart/SplashHeart";

export const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="font-sans">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashHeart key="splah" onFinish={() => setShowSplash(false)} />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CuteMessages />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
