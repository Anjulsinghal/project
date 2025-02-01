import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Commercial Solar Installation',
    description: 'Large scale solar installation for a manufacturing facility',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Residential Solar System',
    description: 'Complete home solar power system installation',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Wind Farm Project',
    description: 'Multi-turbine wind farm installation',
    image: 'https://images.unsplash.com/photo-1467533003447-e295ff1b0435?auto=format&fit=crop&q=80'
  },
  {
    title: 'Solar Carport',
    description: 'Solar-powered parking structure installation',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80'
  },
  {
    title: 'Community Solar Garden',
    description: 'Shared solar power system for a neighborhood',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80'
  }
];

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-blue-400 text-sm font-semibold">PORTFOLIO</span>
            <h2 className="text-4xl font-bold mt-2">Recent Projects</h2>
          </div>
          <button className="bg-green-400 text-slate-900 px-6 py-3 rounded-md hover:bg-green-500 transition-colors flex items-center">
            Explore More <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg ${index < 2 ? 'col-span-1 md:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-square relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}