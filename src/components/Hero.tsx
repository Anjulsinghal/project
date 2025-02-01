import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            ease: 'easeOut',
            staggerChildren: 0.2 
          }}
          className="max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center space-x-2 mb-8"
          >
            <div className="w-6 h-6 text-green-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-sm text-green-400 tracking-wider">MENTARY - SOLAR & RENEWABLE ENERGY</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl font-bold leading-tight mb-6"
          >
            Powering a Sustainable Future,<br />
            One Panel at a Time.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-300 mb-8"
          >
            We believe in a future powered by clean, renewable energy. That's why we're dedicated to 
            providing innovative solutions that make it easier and more affordable for individuals and 
            businesses to transition to sustainable energy sources.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-400 text-slate-900 px-6 py-3 rounded-md hover:bg-green-500 transition-colors"
          >
            Explore More →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}