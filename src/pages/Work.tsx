import { motion } from 'framer-motion';
import { Sun, Wind, Battery, Clock, Users, Shield } from 'lucide-react';

const features = [
  { icon: Clock, text: 'Online at Services' },
  { icon: Users, text: '24/7 Services' },
  { icon: Shield, text: 'Verified Professionals' }
];

export default function Work() {
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
            <span className="text-green-400 text-sm font-semibold tracking-wider">OUR WORK</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              We Install for Your<br />Sustainable Future
            </h1>
            <p className="text-lg text-gray-300">
              We are a team of professional and skilled experts, offering a broad range of renewable energy installation services. We're always delighted to help you with any unconventional installation needs.
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

      {/* About Installation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80"
                alt="Solar Installation"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <span className="text-green-500 text-sm font-semibold">ABOUT OUR INSTALLATIONS</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">We Install for Your Comfort</h2>
              <p className="text-gray-600 mb-6">
                As a leading renewable energy installation company, we offer a comprehensive range of services including solar panel installation, wind turbine setup, energy storage solutions, and smart energy management systems. Our team of experts helps you select the best options and provides the optimal results you could possibly hope for.
              </p>
              <button className="bg-green-400 text-slate-900 px-6 py-3 rounded-md hover:bg-green-500 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-green-400 text-sm font-semibold">WORKING WITH EXCELLENCE</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">
                Our Special Installation<br />Services
              </h2>
              <p className="text-gray-300 mb-8">
                Mentary has 10+ years of experience providing a wide array of specialty services
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Sun className="w-6 h-6 text-green-400 mr-2" />
                    Solar Panel Installation
                  </h3>
                  <p className="text-gray-300">
                    Professional installation of high-efficiency solar panels for homes and businesses, maximizing energy production and savings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Wind className="w-6 h-6 text-green-400 mr-2" />
                    Wind Energy Solutions
                  </h3>
                  <p className="text-gray-300">
                    Expert installation of wind turbines, from small residential units to large commercial systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Battery className="w-6 h-6 text-green-400 mr-2" />
                    Energy Storage Systems
                  </h3>
                  <p className="text-gray-300">
                    Complete setup of battery storage solutions to maximize your energy independence.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
                alt="Installation Services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                alt="Team Member"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="text-white">
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Michael Chen</h3>
                <p className="text-green-400">TECHNICAL DIRECTOR</p>
              </div>
              <p className="text-gray-300 text-lg mb-8">
                "Working with renewable energy has been a great experience. Our professional team understands the needs of sustainable energy and ensures that we bridge the gap between traditional and renewable power sources. As a technical director, it's rewarding to partner with clients who are committed to a sustainable future."
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-400">5000 +</p>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">250 +</p>
                  <p className="text-gray-400">Workers Employed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">25 +</p>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}