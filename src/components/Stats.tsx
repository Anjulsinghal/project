import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '4.8/5', label: 'Ratings from Customers' },
  { value: '20+', label: 'Countries Served' },
  { value: '1.3k', label: 'Successful Installations' }
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg p-6 text-center shadow-lg"
        >
          <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
          <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}