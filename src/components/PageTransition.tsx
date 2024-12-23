import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useLoading } from '../context/LoadingContext';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const { isLoading } = useLoading();

  if (isLoading) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-indigo-600 origin-bottom z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1, originY: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="fixed inset-0 bg-white origin-bottom z-40"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1, originY: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        {children}
      </motion.div>
    </>
  );
}