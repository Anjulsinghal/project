import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, Cpu, Settings } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Cost-Effective Solutions',
    description: 'Our renewable energy solutions are not only environmentally friendly but also budget-conscious.'
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: 'We utilize the latest technology in renewable energy to provide the most efficient solutions.'
  },
  {
    icon: Settings,
    title: 'Customizable Solutions',
    description: "Every customer has unique energy needs and requirements. That's why we offer tailored solutions."
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-green-400 text-sm font-semibold tracking-wider">WHY CHOOSE US</span>
          <h2 className="text-4xl font-bold mt-2 text-slate-900">
            A Positive Impact for Your<br />Home and the Planet
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <feature.icon className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}