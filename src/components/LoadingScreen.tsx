import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';

export default function LoadingScreen() {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        <motion.div
          className="h-32 w-32"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1, 1, 0.5, 0.5],
            opacity: [0, 1, 1, 1, 0],
            rotate: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        >
          <div className="h-full w-full rounded-full border-4 border-t-white border-r-white border-b-transparent border-l-transparent" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-white font-bold text-3xl whitespace-nowrap">Entering Into Arena</span>
        </motion.div>
      </div>
    </motion.div>
  );
}