import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, BookOpen, Users, FileText, Scale } from 'lucide-react';

const Disclaimer = () => {
  const disclaimerSections = [
    {
      icon: AlertTriangle,
      title: "Investment Risk Warning",
      content: [
        "All investments in stocks, mutual funds, and other financial instruments are subject to market risks.",
        "Past performance is not indicative of future results.",
        "The value of investments can go up as well as down, and you may not get back the amount originally invested.",
        "Market volatility can lead to significant losses, especially in short-term trading.",
        "Investors should carefully consider their risk tolerance before making any investment decisions."
      ]
    },
    {
      icon: BookOpen,
      title: "Educational Services Only",
      content: [
        "Brightway Investor provides educational content and market analysis for informational purposes only.",
        "We do not provide personalized investment advice or recommendations.",
        "All content is for educational purposes and should not be considered as financial advice.",
        "Students and viewers must make their own investment decisions based on their research and risk assessment.",
        "We encourage consulting with SEBI-registered investment advisors for personalized advice."
      ]
    },
    {
      icon: Scale,
      title: "SEBI Registration Status",
      content: [
        "Brightway Investor is NOT registered with SEBI (Securities and Exchange Board of India) as an Investment Advisor.",
        "We do not manage client funds or portfolios.",
        "We do not charge fees based on assets under management.",
        "Our services are limited to education, training, and general market commentary.",
        "For regulated investment advisory services, please consult SEBI-registered advisors."
      ]
    },
    {
      icon: Shield,
      title: "No Guarantee of Returns",
      content: [
        "We do not guarantee any specific returns or profits from our educational content.",
        "Success stories and testimonials are individual experiences and may not be typical.",
        "Market conditions change constantly, and strategies that worked in the past may not work in the future.",
        "All trading and investment strategies carry inherent risks.",
        "Participants should never invest more than they can afford to lose."
      ]
    },
    {
      icon: Users,
      title: "User Responsibility",
      content: [
        "Users are solely responsible for their investment decisions and outcomes.",
        "It is the user's responsibility to verify all information before making investment decisions.",
        "Users should conduct their own research and due diligence.",
        "We recommend starting with small amounts and paper trading before committing significant capital.",
        "Users should understand tax implications of their investment decisions."
      ]
    },
    {
      icon: FileText,
      title: "Content and Analysis",
      content: [
        "All market analysis, stock recommendations, and educational content are opinions based on available information.",
        "Information provided may not always be accurate, complete, or up-to-date.",
        "Market conditions can change rapidly, making previous analysis obsolete.",
        "We are not liable for any losses resulting from the use of our content or analysis.",
        "Users should cross-verify information from multiple reliable sources."
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <AlertTriangle className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investment <span className="text-yellow-300">Disclaimer</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Important information about risks, limitations, and our educational services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-start space-x-4"
          >
            <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-4">
                IMPORTANT NOTICE
              </h2>
              <p className="text-red-700 dark:text-red-200 text-lg leading-relaxed">
                <strong>Investments are subject to market risk.</strong> Please read all scheme-related documents carefully before investing. 
                Brightway Investor is an educational platform and is NOT registered with SEBI as an Investment Advisor. 
                We do not provide investment advice or manage client funds. All investment decisions are solely your responsibility.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Sections */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {disclaimerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <section.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Legal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Company Details
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Business Name:</strong> Brightway Investor</p>
                  <p><strong>Nature of Business:</strong> Educational Services</p>
                  <p><strong>Services:</strong> Stock Market Education & Training</p>
                  <p><strong>Location:</strong> Mumbai, India</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Regulatory Status
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>SEBI Registration:</strong> Not Applicable (Educational Services)</p>
                  <p><strong>Investment Advisory:</strong> Not Provided</p>
                  <p><strong>Fund Management:</strong> Not Provided</p>
                  <p><strong>Compliance:</strong> Educational Content Guidelines</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Recommendation
              </h4>
              <p className="text-yellow-700 dark:text-yellow-200">
                For personalized investment advice, portfolio management, or regulated financial services, 
                please consult with SEBI-registered Investment Advisors or Portfolio Managers. 
                You can find registered advisors on the official SEBI website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;