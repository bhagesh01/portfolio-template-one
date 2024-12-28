import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import { LoadingProvider } from './context/LoadingContext';
import About from './pages/About';
// import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import HireMe from './pages/HireMe';

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <LoadingScreen key="loading-screen" />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<HireMe />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;