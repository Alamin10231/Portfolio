import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl pt-10 md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Let's Connect
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <form className="space-y-6">
              {['name', 'email', 'message'].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor={field}>
                    {field === 'message' ? 'Your Message' : `${field === 'name' ? 'Your Name' : 'Email Address'}`}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      rows="3"
                      className="w-full px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-300 placeholder-gray-500 transition-all duration-300 hover:bg-gray-800/50"
                      placeholder="Let's create something amazing..."
                      required
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      className="w-full px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-300 placeholder-gray-500 transition-all duration-300 hover:bg-gray-800/50"
                      placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                      required
                    />
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: EnvelopeIcon, color: 'blue-400', title: 'Email Me', content: 'alamin3636md@gmail.com' },
              { icon: PhoneIcon, color: 'purple-400', title: 'Call Me', content: '+880 01600224052' },
              { icon: MapPinIcon, color: 'blue-400', title: 'Location', content: 'Dhaka, Bangladesh' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-default"
              >
                {/* Render the icon using React.createElement */}
                {React.createElement(item.icon, {
                  className: `h-8 w-8 text-${item.color} mb-3 transition-transform duration-300 hover:scale-110`,
                })}
                <h3 className="text-xl font-bold text-gray-100">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
