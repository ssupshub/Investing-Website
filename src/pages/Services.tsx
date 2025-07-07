import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  FileText, 
  UserCheck, 
  TrendingUp,
  PiggyBank,
  Globe,
  ChevronDown,
  ChevronUp,
  X,
  Mail,
  MessageCircle
} from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      id: 1,
      icon: BookOpen,
      title: "Stock Market Education",
      description: "Master the fundamentals of stock market investing with our comprehensive courses",
      color: "from-blue-500 to-blue-600",
      features: [
        "Basic to advanced trading concepts",
        "Technical and fundamental analysis",
        "Risk management strategies",
        "Market psychology and behavior",
        "Portfolio construction techniques"
      ]
    },
    {
      id: 2,
      icon: Users,
      title: "Free Webinars",
      description: "Join our weekly live sessions with Q&A for market insights and strategies",
      color: "from-green-500 to-green-600",
      features: [
        "Weekly live sessions every Saturday",
        "Interactive Q&A with experts",
        "Market analysis and predictions",
        "Guest speakers from industry",
        "Recording access for members"
      ]
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Portfolio Consultation",
      description: "Get personalized guidance with real-time support for your investment portfolio",
      color: "from-purple-500 to-purple-600",
      features: [
        "One-on-one portfolio review",
        "Risk assessment and optimization",
        "Asset allocation strategies",
        "Performance tracking and analysis",
        "Quarterly review sessions"
      ]
    },
    {
      id: 4,
      icon: FileText,
      title: "Monthly & Daily Insights",
      description: "Receive detailed charts, analysis, and market data to make informed decisions",
      color: "from-orange-500 to-orange-600",
      features: [
        "Daily market updates and analysis",
        "Weekly sector performance reports",
        "Monthly market outlook",
        "Technical chart analysis",
        "Economic indicators tracking"
      ]
    },
    {
      id: 5,
      icon: UserCheck,
      title: "One-on-One Mentorship",
      description: "Premium personalized support and guidance for serious investors",
      color: "from-red-500 to-red-600",
      features: [
        "Personal mentor assignment",
        "Weekly one-on-one calls",
        "Customized learning path",
        "Direct WhatsApp support",
        "Performance tracking and feedback"
      ]
    },
    {
      id: 6,
      icon: TrendingUp,
      title: "Stock Analysis PDFs",
      description: "In-depth performance reviews, news analysis, and quarterly results breakdown",
      color: "from-teal-500 to-teal-600",
      features: [
        "Detailed company analysis reports",
        "Quarterly earnings breakdown",
        "Industry comparison studies",
        "Future growth projections",
        "Buy/Hold/Sell recommendations"
      ]
    },
    {
      id: 7,
      icon: PiggyBank,
      title: "Mutual Funds & ETF Advisory",
      description: "Expert guidance on mutual funds and ETFs for long-term wealth creation",
      color: "from-indigo-500 to-indigo-600",
      features: [
        "Fund selection and analysis",
        "SIP planning and optimization",
        "Tax-efficient investing strategies",
        "Regular performance monitoring",
        "Rebalancing recommendations"
      ]
    },
    {
      id: 8,
      icon: Globe,
      title: "Forex & Global Market News",
      description: "Stay updated with international markets and currency trading opportunities",
      color: "from-pink-500 to-pink-600",
      features: [
        "Daily forex market analysis",
        "Global economic news updates",
        "Currency pair recommendations",
        "International market trends",
        "Geopolitical impact analysis"
      ]
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const handleGetStarted = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsContactModalOpen(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsContactModalOpen(false);
      setIsSubmitted(false);
      setContactForm({ name: '', email: '', phone: '', message: '' });
      setSelectedService('');
    }, 2000);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive solutions for all your investment needs - from beginner education to advanced portfolio management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-end mb-4">
                  <button
                    onClick={() => toggleExpanded(service.id)}
                    className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="text-sm font-medium">
                      {expandedService === service.id ? 'View Less' : 'View More'}
                    </span>
                    {expandedService === service.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedService === service.id ? 'auto' : 0,
                    opacity: expandedService === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      What's Included:
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleGetStarted(service.title)}
                      className={`w-full bg-gradient-to-r ${service.color} text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Join thousands of successful investors who trust Brightway Investor for their financial growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleGetStarted('Free Consultation')}
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Schedule Free Consultation
            </motion.button>
            <motion.a
              href="https://wa.me/917291888999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="text-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full inline-block mb-4">
                    <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Get Started with {selectedService}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Fill in your details and we'll contact you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Any specific questions or requirements?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full inline-block mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Request Submitted!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  We'll contact you within 24 hours to discuss your requirements
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;