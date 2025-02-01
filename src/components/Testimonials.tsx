import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Efficient and Professional Team!',
    content: 'I was very impressed with the solar panel installation process. The team was very professional and always kept me informed of the progress. They did an excellent job and I would highly recommend them to anyone looking for a quality solar panel installation.',
    rating: 5
  },
  {
    name: 'Richard Wilson',
    title: 'Smooth and Hassle-Free Process!',
    content: 'The solar panel installation process was smooth and hassle-free. The team was professional and took care of everything, so I didn\'t have to worry about a thing. Highly recommended if you\'re looking for a quality solar panel installation.',
    rating: 5
  },
  {
    name: 'David Brown',
    title: 'Excellent Customer Service',
    content: 'The customer service I received from the solar installation team was outstanding. They were always available to answer my questions and made sure I was completely satisfied with the final result. I\'m saving a lot on my energy bills and I\'m loving it!',
    rating: 5
  },
  {
    name: 'Jane Doe',
    title: 'Top-notch Workmanship from Mentary!',
    content: 'I was extremely impressed with the quality of the solar panel installation. The workmanship was superb and the team was very professional. I would highly recommend this company to anyone looking for a high-quality solar panel installation.',
    rating: 5
  },
  {
    name: 'Michael Smith',
    title: 'Affordable and Reliable Services!',
    content: 'I was looking for a solar panel company that was affordable and reliable, and I found both with this company. The installation was done professionally within budget, and the panels are working great. I would definitely use this company again.',
    rating: 5
  },
  {
    name: 'Emily Davis',
    title: 'Eco-friendly and Convenient Product!',
    content: 'I wanted to switch to solar panels because I wanted to be more eco-friendly and save money on my energy bills. The installation process was convenient, and now I have clean energy powering my home. I couldn\'t be happier.',
    rating: 5
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold">TESTIMONIAL</span>
          <h2 className="text-4xl font-bold mt-2">
            Happy Customers,<br />Happy World
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-700/50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{testimonial.title}</h3>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <p className="text-green-400 font-medium">{testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}