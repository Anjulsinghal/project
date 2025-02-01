import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const yearlyData = [
  { year: '2014', value: 135.5 },
  { year: '2016', value: 174.4 },
  { year: '2020', value: 278.3 }
];

export default function RenewableStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px'
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-400 text-sm font-semibold">MENTARY - SOLAR & RENEWABLE ENERGY</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">
              Renewable Energy<br />Boomed In 2020
            </h2>
            <p className="text-gray-600 mb-6">
              Net global renewable energy capacity additions by year (in gigawatts)
            </p>
            <motion.div
              ref={ref}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {yearlyData.map((data, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{data.year}</span>
                    <span className="text-blue-500">{data.value}</span>
                  </div>
                  <motion.div
                    className="h-2 bg-blue-500 rounded"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(data.value / 278.3) * 100}%` } : {}}
                    transition={{ 
                      duration: 1.2,
                      delay: index * 0.3,
                      ease: 'easeOut'
                    }}
                  />
                </div>
              ))}
            </motion.div>
            <p className="text-sm text-gray-500 mt-4">Source: International Energy Agency</p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800 rounded-lg p-8 text-white"
          >
            <h3 className="text-5xl font-bold mb-2">50,000 +</h3>
            <p className="text-xl">Satisfied Clients</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}