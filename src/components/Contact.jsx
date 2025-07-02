import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

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
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F6F9FB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-full mb-4"
          >
            <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 pb-2">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
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
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <PaperAirplaneIcon className="w-6 h-6 text-blue-500" />
              Send a Message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {['name', 'email', 'message'].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor={field}>
                    {field === 'message' ? 'Your Message' : `${field === 'name' ? 'Your Name' : 'Email Address'}`}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      name={field}
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-[#F6F9FB] border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-300 hover:bg-gray-50 focus:bg-white"
                      placeholder="Let's create something amazing..."
                      required
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F6F9FB] border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-300 hover:bg-gray-50 focus:bg-white"
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
                className="pt-2"
              >
                <button
                  type="submit"
                  className="w-full group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-md"
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="relative z-10">Send Message</span>
                  )}
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
              { 
                icon: EnvelopeIcon, 
                color: 'blue-500', 
                bg: 'blue-100',
                title: 'Email Me', 
                content: 'alamin3636md@gmail.com',
                action: 'mailto:alamin3636md@gmail.com'
              },
              { 
                icon: PhoneIcon, 
                color: 'purple-500', 
                bg: 'purple-100',
                title: 'Call Me', 
                content: '+880 01600224052',
                action: 'tel:+88001600224052'
              },
              { 
                icon: MapPinIcon, 
                color: 'blue-500', 
                bg: 'blue-100',
                title: 'Location', 
                content: 'Dhaka, Bangladesh',
                action: 'https://maps.google.com/?q=Dhaka,Bangladesh'
              },
            ].map((item) => (
              <motion.a
                key={item.title}
                href={item.action}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)"
                }}
                whileTap={{ scale: 0.98 }}
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start">
                  <div className={`bg-${item.bg} p-3 rounded-lg mr-4`}>
                    {React.createElement(item.icon, {
                      className: `h-8 w-8 text-${item.color} transition-colors duration-300 group-hover:text-white`,
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">{item.content}</p>
                  </div>
                </div>
              </motion.a>
            ))}
            
            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Connect with Me</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', color: 'gray-700', bg: 'gray-100', icon: 'github' },
                  { name: 'LinkedIn', color: 'blue-600', bg: 'blue-100', icon: 'linkedin' },
                  { name: 'Twitter', color: 'sky-500', bg: 'sky-100', icon: 'twitter' },
                  { name: 'Instagram', color: 'purple-600', bg: 'purple-100', icon: 'instagram' },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-${social.bg} w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 hover:border-${social.color} transition-all duration-300`}
                  >
                    <div className={`text-${social.color} text-lg font-bold`}>
                      {social.icon === 'github' && <span>G</span>}
                      {social.icon === 'linkedin' && <span>in</span>}
                      {social.icon === 'twitter' && <span>X</span>}
                      {social.icon === 'instagram' && <span>IG</span>}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute right-10 bottom-10 w-32 h-32 rounded-full bg-blue-200/30 blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute left-10 top-1/3 w-40 h-40 rounded-full bg-purple-200/30 blur-3xl -z-10"
        />
      </div>
    </section>
  );
};

export default Contact;