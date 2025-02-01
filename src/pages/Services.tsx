import { motion } from 'framer-motion';
import { ArrowRight, Sun, Wind, Battery, Cpu, Clock, Shield, Users } from 'lucide-react';

const services = [
  {
    title: 'Solar Panel Installation',
    subtitle: 'Harness the Power of the Sun',
    description: 'Our expert team provides professional solar panel installation services for both residential and commercial properties. We use high-quality panels and ensure optimal placement for maximum energy generation.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    icon: Sun,
    reverse: false
  },
  {
    title: 'Wind Turbine Solutions',
    subtitle: 'Clean Energy from Natural Wind',
    description: 'We specialize in installing and maintaining wind turbines of various sizes. Our wind energy solutions are perfect for properties with consistent wind patterns, providing a reliable source of renewable energy.',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80',
    icon: Wind,
    reverse: true
  },
  {
    title: 'Energy Storage Systems',
    subtitle: 'Power When You Need It',
    description: 'Our advanced energy storage solutions help you maintain power during outages and optimize energy usage. We offer various battery options to suit your specific needs and budget.',
    image: 'https://images.unsplash.com/photo-1620677368158-41a63899f5ca?auto=format&fit=crop&q=80',
    icon: Battery,
    reverse: false
  },
  {
    title: 'Smart Energy Management',
    subtitle: 'Optimize Your Energy Usage',
    description: 'Take control of your energy consumption with our smart energy management systems. Monitor usage, automate controls, and maximize efficiency with our cutting-edge technology solutions.',
    image: 'https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?auto=format&fit=crop&q=80',
    icon: Cpu,
    reverse: true
  }
];

const features = [
  { icon: Clock, text: '24/7 Support Available' },
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Users, text: 'Expert Installation Team' }
];

const stats = [
  { value: '5000+', label: 'Projects Completed' },
  { value: '250+', label: 'Workers Employed' },
  { value: '25+', label: 'Years Experience' }
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-green-400 text-sm font-semibold tracking-wider">OUR SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              We Install for Your<br />Sustainable Future
            </h1>
            <p className="text-lg text-gray-300">
              We offer comprehensive renewable energy solutions with expert installation services. Our team ensures quality implementation for all your sustainable energy needs.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="flex items-center justify-center space-x-2 text-gray-300"
                >
                  <feature.icon className="w-5 h-5 text-green-400" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ x: service.reverse ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-green-400 p-4 rounded-lg shadow-lg">
                      <service.icon className="w-8 h-8 text-slate-900" />
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="w-full md:w-1/2 space-y-6"
                  initial={{ x: service.reverse ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-500 font-semibold">{service.subtitle}</span>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                  <motion.button 
                    className="inline-flex items-center bg-green-400 text-slate-900 px-6 py-3 rounded-md hover:bg-green-500 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Appointment 
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.2 
                  }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-green-400 mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}