import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import Stats from './Stats';

const services = [
  {
    title: 'Solar Panel Installation',
    description: 'Our team of experienced installers will install high-quality solar panels on your property to provide clean renewable energy.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80'
  },
  {
    title: 'Wind Turbine Installation',
    description: 'We offer installation services for wind turbines to help you generate energy from the wind. Our turbines are built to be efficient.',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80'
  },
  {
    title: 'Solar Panel Maintenance',
    description: 'To keep your solar panels functioning at peak efficiency, we offer cleaning and maintenance services to keep them free of dirt and debris.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?auto=format&fit=crop&q=80'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold">OUR SERVICES</span>
          <h2 className="text-4xl font-bold mt-2">
            Comprehensive Renewable<br />Energy Solutions
          </h2>
          <p className="mt-4 text-gray-400">
            We offer a range of services to help you take advantage of renewable energy
            and reduce your carbon footprint.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <div className="aspect-square relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <button className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Stats />
    </section>
  );
}