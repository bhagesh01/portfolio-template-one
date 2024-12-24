import { ArrowRight, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';
import AnimatedText from '../components/AnimatedText';

export default function Home() {
  const { isLoading } = useLoading();

  if (isLoading) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <AnimatedText delay={1}>Experience the</AnimatedText>{' '}
            <AnimatedText delay={2}>
              <span className="text-transparent bg-gradient-to-r from-[#55034a] to-[#521b4cd6] bg-clip-text">
                Vijay&apos;s
              </span>
            </AnimatedText>{' '}
            <AnimatedText delay={3}>Portfolio Arena.</AnimatedText>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            <AnimatedText delay={4}>
              We craft digital experiences that push boundaries and set new
              standards in web design.
            </AnimatedText>
          </p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-indigo-600 hover:border-white px-10 py-5 text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <span className="absolute inset-x-0 -bottom-4 h-[2px] bg-white transition-all group-hover:h-full group-hover:bottom-0 group-hover:bg-white"></span>
              <span className="relative flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors group-hover:text-indigo-600">
                Explore My Work
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>


      {/* Social Links */}
      <div className="hidden absolute bottom-14 right-28 lg:flex flex-col items-center gap-3 border-[1px] rounded-full py-10 px-3 border-gray-600">
        <div className="h-[6vh] w-[1px] bg-black"></div>
        <div className="rounded-full hover:bg-gray-200 text-black">
          <Link to="/about">
            <img
              className="rounded-full h-12 w-12 object-cover"
              src="https://images.unsplash.com/photo-1680458865250-319a307b4506?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="logo"
            />
          </Link>
        </div>
        <div className="p-4 border-[1px] rounded-full hover:bg-gray-200 text-black">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
        </div>
        <div className="p-4 border-[1px] rounded-full hover:bg-gray-200 text-black">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </div>
        <div className="p-4 border-[1px] rounded-full hover:bg-gray-200 text-black">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
        </div>
        <div className="h-[6vh] w-[1px] bg-black"></div>
      </div>

      {/* Footer */}
      <footer className="lg:hidden w-full px-4 md:px-20 py-4 border-t border-gray-200 text-center" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
  <span className="md:text-lg text-lg text-gray-600">
    All credits reserved{' '}
    <a href="#github" className="text-indigo-300">
      @Bobby
    </a>
  </span>
  <div className="flex justify-center gap-3 mt-2">
    <div className="p-3 border-[1px] rounded-full hover:bg-gray-200 text-black">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>
    </div>
    <div className="p-3 border-[1px] rounded-full hover:bg-gray-200 text-black">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>
    </div>
    <div className="p-3 border-[1px] rounded-full hover:bg-gray-200 text-black">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}
