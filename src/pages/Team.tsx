import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, Target, Users, Lightbulb } from 'lucide-react';

const ceo = {
  name: 'Sarah Johnson',
  role: 'CEO & Founder',
  bio: 'With over 15 years of experience in renewable energy, Sarah leads our mission to create a sustainable future. Her vision has transformed Mentary into a leading force in the renewable energy sector, focusing on innovation, sustainability, and customer satisfaction.',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
  achievements: [
    { icon: Award, title: 'Industry Leader', description: 'Recognized as Top 10 Renewable Energy CEO' },
    { icon: Target, title: 'Vision Driven', description: 'Pioneering sustainable energy solutions' },
    { icon: Users, title: 'Team Builder', description: 'Built a team of 250+ professionals' },
    { icon: Lightbulb, title: 'Innovator', description: '15+ Patents in renewable technology' }
  ]
};

const teamMembers = [
  {
    name: 'Michael Chen',
    role: 'Chief Technical Officer',
    bio: 'Michael brings 12 years of expertise in solar technology and system design to ensure optimal solutions for our clients.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    specialty: 'Solar Technology'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations',
    bio: 'Emily oversees all installation projects, ensuring quality and efficiency in every implementation.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    specialty: 'Project Management'
  },
  {
    name: 'David Kim',
    role: 'Lead Engineer',
    bio: 'David specializes in wind energy systems and leads our technical innovation initiatives.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    specialty: 'Wind Energy'
  }
];

export default function Team() {
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
            <span className="text-green-400 text-sm font-semibold tracking-wider">OUR TEAM</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Meet the Experts Behind<br />Our Success
            </h1>
            <p className="text-lg text-gray-300">
              Our team of dedicated professionals brings together decades of experience in renewable energy to deliver exceptional results for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="text-green-400 text-sm font-semibold">LEADERSHIP</span>
                  <h2 className="text-3xl font-bold text-white">{ceo.name}</h2>
                  <p className="text-lg font-medium text-green-400">{ceo.role}</p>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{ceo.bio}</p>
                <div className="flex space-x-4">
                  <button className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {ceo.achievements.map((achievement, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-lg">
                      <achievement.icon className="w-8 h-8 text-green-400 mb-2" />
                      <h3 className="text-white font-semibold">{achievement.title}</h3>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Leadership Team</h2>
            <p className="text-gray-600 mt-4">Meet the experts driving innovation in renewable energy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-green-400 text-slate-900 text-sm font-semibold rounded-full mb-3">
                      {member.specialty}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-green-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-200 text-sm">{member.bio}</p>
                    <div className="flex space-x-3 mt-4">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Linkedin className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Mail className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}