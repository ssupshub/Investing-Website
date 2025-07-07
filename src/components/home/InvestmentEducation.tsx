import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Target, 
  PieChart, 
  BarChart3,
  DollarSign,
  Clock
} from 'lucide-react';

const InvestmentEducation = () => {
  const educationTopics = [
    {
      icon: BookOpen,
      title: "Understanding Stock Markets",
      description: "Learn the fundamentals of how stock markets work, different types of securities, and market mechanisms.",
      keyPoints: [
        "Primary vs Secondary markets",
        "Stock exchanges and trading hours",
        "Market participants and their roles",
        "Order types and execution"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investment Analysis",
      description: "Master the art of analyzing stocks using both fundamental and technical analysis techniques.",
      keyPoints: [
        "Financial statement analysis",
        "Ratio analysis and valuation",
        "Technical indicators and charts",
        "Industry and sector analysis"
      ]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Understand different types of investment risks and strategies to protect your capital.",
      keyPoints: [
        "Market, credit, and liquidity risks",
        "Diversification strategies",
        "Stop-loss and position sizing",
        "Risk-reward ratio calculation"
      ]
    },
    {
      icon: Target,
      title: "Goal-Based Investing",
      description: "Learn to align your investments with specific financial goals and time horizons.",
      keyPoints: [
        "Short-term vs long-term goals",
        "Asset allocation strategies",
        "Tax-efficient investing",
        "Regular portfolio review"
      ]
    }
  ];

  const investmentTypes = [
    {
      icon: DollarSign,
      title: "Equity Investments",
      description: "Direct stock investments for wealth creation",
      riskLevel: "High",
      timeHorizon: "5+ years",
      expectedReturn: "12-15%"
    },
    {
      icon: PieChart,
      title: "Mutual Funds",
      description: "Professionally managed diversified portfolios",
      riskLevel: "Medium",
      timeHorizon: "3-5 years",
      expectedReturn: "10-12%"
    },
    {
      icon: BarChart3,
      title: "ETFs",
      description: "Exchange-traded funds for passive investing",
      riskLevel: "Medium",
      timeHorizon: "3+ years",
      expectedReturn: "8-12%"
    },
    {
      icon: Clock,
      title: "SIP Investments",
      description: "Systematic investment plans for disciplined investing",
      riskLevel: "Low-Medium",
      timeHorizon: "5+ years",
      expectedReturn: "10-14%"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Investment <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Build a strong foundation in investment knowledge with our comprehensive educational content
          </p>
        </motion.div>

        {/* Education Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educationTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <topic.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {topic.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {topic.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Learning Points:</h4>
                {topic.keyPoints.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Types of <span className="text-blue-600">Investments</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Understand different investment options and their characteristics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investmentTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full inline-block mb-4 shadow-md">
                <type.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {type.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {type.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Risk Level:</span>
                  <span className={`font-medium ${
                    type.riskLevel === 'High' ? 'text-red-600' :
                    type.riskLevel === 'Medium' ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {type.riskLevel}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Time Horizon:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{type.timeHorizon}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Expected Return:</span>
                  <span className="font-medium text-green-600">{type.expectedReturn}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Investment Education?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join our comprehensive courses and build the knowledge you need for successful investing
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Explore Our Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentEducation;