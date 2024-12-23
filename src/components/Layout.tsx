import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';
import PageTransition from './PageTransition';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const menuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const linkVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isLoading } = useLoading();

  if (isLoading) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.nav 
        className="fixed w-full z-50 md:rounded-br-xl md:rounded-bl-xl md:rounded-tr-none md:rounded-tl-none rounded-full bg-white border-[1px] px-8"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-full">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              Portfolio
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-indigo-600'
                      : 'text-gray-900 hover:text-indigo-600'
                  } transition-colors duration-300 text-sm uppercase font-semibold tracking-widest`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 mix-blend-difference"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-gray-100" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-indigo-600 md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full px-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    <Link
                      to={item.path}
                      className="text-white text-5xl font-bold mb-6 block hover:opacity-60 transition-opacity"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
    </div>
  );
}