import { ArrowRight, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';
import AnimatedText from '../components/AnimatedText';

export default function Home() {
  const { isLoading } = useLoading();

  if (isLoading) return null;

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-10">
          <div className="max-w-4xl pt-20">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
              <AnimatedText delay={1}>Experience the</AnimatedText>{' '}
              <AnimatedText delay={2}>
              <span className="text-transparent bg-gradient-to-r from-[#55034a] to-[#521b4cd6] bg-clip-text">
                Vijay&apos;s
              </span>
                </AnimatedText>{' '}
              <AnimatedText delay={3}>Portfolio arena.</AnimatedText>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              <AnimatedText delay={4}>
                We craft digital experiences that push boundaries and set new
                standards in web design.
              </AnimatedText>
            </p>
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link
                to="/services"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-indigo-600 px-8 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white transition-all group-hover:h-full group-hover:bg-white"></span>
                <span className="relative flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors group-hover:text-indigo-600">
                  Explore Our Work
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='absolute h-fit w-fit lg:flex flex-col items-center justify-center gap-3 border-[1px] rounded-full p-2 right-16 bottom-10 hidden'>
      <div className='h-[10vh] w-[1px] bg-black'>
      </div>


      <div className='border-[1px] rounded-full hover:bg-gray-200 text-black'>
      <Link to={"/about"}> <img className='rounded-full h-14 w-14 object-cover'  src='https://images.unsplash.com/photo-1680458865250-319a307b4506?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='logo' /> </Link>
      </div>
      <div className='p-3 border-[1px] rounded-full hover:bg-gray-200 text-black'>
      <a href="https://linkedin.com" target='_blank'> <LinkedinIcon/> </a>
      </div>
      <div className='p-3 border-[1px] rounded-full hover:bg-gray-200 text-black'>
      <a href="https://github.com" target='_blank'> <GithubIcon/> </a>
      </div>
      <div className='p-3 border-[1px] rounded-full hover:bg-gray-200 text-black'>
      <a href="https://twitter.com" target='_blank'> <TwitterIcon/> </a>
      </div>

      <div className='h-[10vh] w-[1px] bg-black'>
      </div>
      </div>
      
      <footer className='sm:hidden flex items-center justify-between px-8 py-8 border-b-0 border-[1px]
      rounded-tr-xl rounded-tl-xl'>
      <span className=' whitespace-nowrap text-sm text-gray-600'>
        all credits reserved <a href="#github" className='text-indigo-300'>@Bobby</a>
      </span>
      <div className='flex items-center justify-center gap-3'>
      <div className='p-3 border-[1px] rounded-full hover:bg-gray-200 text-black'>
      <a href="https://linkedin.com" target='_blank'> <LinkedinIcon/> </a>
      </div>
      <div className='p-3 border-[1px] rounded-full hover:bg-gray-200 text-black'>
      <a href="https://github.com" target='_blank'> <GithubIcon/> </a>
      </div>
      <div className='p-3 border-[1px] rounded-full hover:bg-gray-200 text-black'>
      <a href="https://twitter.com" target='_blank'> <TwitterIcon/> </a>
      </div>
      </div>
      </footer>
    </div>
  );
}