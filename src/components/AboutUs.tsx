import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const missions = [
  'To provide clean, efficient, and affordable renewable energy solutions to our customers',
  'To promote the widespread adoption of renewable energy and increase energy independence',
  'To stay at the forefront of renewable energy technology and offer cutting-edge solutions'
];

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-800 rounded-lg aspect-square" />
          <div>
            <span className="text-blue-400 text-sm font-semibold">ABOUT US</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">
              Building a Brighter<br />Future, Together
            </h2>
            <p className="text-gray-600 mb-8">
              At Mentary, we believe in the power of renewable energy to create a more sustainable future. 
              With a passion for clean energy and a commitment to our customers, we are dedicated to delivering 
              the best possible solutions.
            </p>
            <div>
              <h3 className="font-semibold mb-4">Our Missions:</h3>
              <motion.div
                ref={ref}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                {missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    className="bg-blue-500 text-white p-4 rounded-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 }}
                  >
                    {mission}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}