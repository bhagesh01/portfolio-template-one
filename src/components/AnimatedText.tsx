import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
}

const textVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AnimatedText({ children, delay = 0 }: AnimatedTextProps) {
  return (
    <span className="inline-block h-fit overflow-hidden">
      <motion.span
        className="inline-block"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={delay}
      >
        {children}
      </motion.span>
    </span>
  );
}