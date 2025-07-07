import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      question: "How do I start investing in the stock market?",
      answer: "Starting your investment journey is simple with Brightway Investor. First, open a Demat and trading account with any SEBI-registered broker. Then, join our free webinars to understand market basics. We recommend starting with our Stock Market Education course to build a strong foundation. Begin with small amounts (₹1,000-5,000) and gradually increase as you gain confidence and knowledge."
    },
    {
      id: 2,
      question: "What is the minimum capital needed to start investing?",
      answer: "You can start investing with as little as ₹500-1,000. Many brokers offer zero brokerage for delivery trades, making small investments viable. For mutual funds through SIP, you can start with just ₹100 per month. However, we recommend having at least ₹10,000-25,000 to build a diversified portfolio and cover transaction costs effectively."
    },
    {
      id: 3,
      question: "Can I learn from scratch with no prior knowledge?",
      answer: "Absolutely! Brightway Investor specializes in teaching complete beginners. Our courses start from the very basics - what is a stock, how markets work, and gradually progress to advanced concepts. We provide step-by-step guidance, practical examples, and real-time support. Over 70% of our students started with zero knowledge and are now successful investors."
    },
    {
      id: 4,
      question: "Is Brightway Investor SEBI-registered?",
      answer: "No, Brightway Investor is not SEBI-registered as an investment advisor. We are an educational platform providing stock market education, analysis, and guidance. We do not manage funds or provide direct investment advice. All our services are educational in nature, helping you make informed decisions independently. We always recommend consulting SEBI-registered advisors for personalized investment advice."
    },
    {
      id: 5,
      question: "What's the difference between your free and paid services?",
      answer: "Our free services include weekly webinars, basic market updates, and introductory educational content. Paid services offer in-depth courses, personalized mentorship, detailed stock analysis reports, portfolio consultation, daily market insights, and direct access to our experts. Paid members also get priority support and access to exclusive strategies and tools."
    },
    {
      id: 6,
      question: "How much time do I need to dedicate to learning?",
      answer: "For basic understanding, dedicate 1-2 hours daily for 2-3 months. Our structured courses are designed for working professionals. You can learn at your own pace with recorded sessions. For active trading, you'll need 30-60 minutes daily for market analysis. Long-term investing requires less daily time but consistent learning over 6-12 months for mastery."
    },
    {
      id: 7,
      question: "Do you guarantee returns on investments?",
      answer: "No, we never guarantee returns. Stock market investments are subject to market risks, and past performance doesn't guarantee future results. Our role is to educate you about strategies, risk management, and market analysis. We focus on building your knowledge and skills to make informed decisions. Any investment decision is entirely yours."
    },
    {
      id: 8,
      question: "What support do you provide after course completion?",
      answer: "We provide lifetime access to course materials, quarterly market outlook sessions, alumni WhatsApp groups for peer learning, and discounted rates on advanced courses. Premium members get continued access to our experts for queries. We also conduct regular refresher sessions and update materials based on market changes."
    },
    {
      id: 9,
      question: "Can I get refund if I'm not satisfied?",
      answer: "Yes, we offer a 7-day money-back guarantee for all our paid courses. If you're not satisfied with the content quality or teaching methodology within the first week, we'll provide a full refund. For mentorship programs, we offer a 15-day trial period. Refunds are processed within 5-7 business days."
    },
    {
      id: 10,
      question: "How is your approach different from other educators?",
      answer: "We focus on practical, real-world application rather than just theory. Our strategies are tested in live markets, and we share both successes and failures transparently. We emphasize risk management over quick profits, provide personalized attention in small batches, and maintain long-term relationships with students. Our founder's hands-on experience and ethical approach sets us apart."
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <HelpCircle className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-yellow-300">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Get answers to common questions about stock market investing and our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No questions found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is here to help you with any queries about stock market investing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:info@brightwayinvestor.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Email Us
              </motion.a>
              <motion.a
                href="https://wa.me/917291888999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp: +91 7291888999</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;