import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  TrendingUp, 
  Shield, 
  Clock, 
  Target, 
  PieChart,
  AlertCircle,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const InvestmentTips = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const investmentTips = [
    {
      icon: Target,
      title: "Start with Clear Goals",
      description: "Define your financial objectives before investing",
      tips: [
        "Set specific, measurable financial goals",
        "Determine your investment timeline",
        "Calculate how much you need to invest monthly",
        "Review and adjust goals annually"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: PieChart,
      title: "Diversify Your Portfolio",
      description: "Don't put all your eggs in one basket",
      tips: [
        "Spread investments across different sectors",
        "Mix large-cap, mid-cap, and small-cap stocks",
        "Include both equity and debt instruments",
        "Consider international diversification"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Time in Market Beats Timing",
      description: "Consistency is more important than perfect timing",
      tips: [
        "Start investing early, even with small amounts",
        "Use SIP for regular, disciplined investing",
        "Stay invested during market volatility",
        "Benefit from the power of compounding"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Risk Management is Key",
      description: "Protect your capital while seeking growth",
      tips: [
        "Never invest more than you can afford to lose",
        "Use stop-loss orders for active trading",
        "Maintain an emergency fund separately",
        "Understand the risk-return relationship"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Research Before Investing",
      description: "Knowledge is your best investment tool",
      tips: [
        "Analyze company fundamentals thoroughly",
        "Understand the business model",
        "Check financial health and growth prospects",
        "Read annual reports and quarterly results"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const quickTips = [
    {
      icon: CheckCircle,
      title: "Do's",
      items: [
        "Invest regularly through SIP",
        "Stay informed about market trends",
        "Review portfolio quarterly",
        "Invest for long-term wealth creation",
        "Keep emotions out of investing",
        "Maintain proper documentation"
      ],
      color: "text-green-600"
    },
    {
      icon: AlertCircle,
      title: "Don'ts",
      items: [
        "Don't panic during market downturns",
        "Avoid putting all money in one stock",
        "Don't invest borrowed money",
        "Avoid frequent buying and selling",
        "Don't follow tips blindly",
        "Never invest without research"
      ],
      color: "text-red-600"
    }
  ];

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % investmentTips.length);
  };

  const prevTip = () => {
    setCurrentTipIndex((prev) => (prev - 1 + investmentTips.length) % investmentTips.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full">
              <Lightbulb className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Smart Investment <span className="text-yellow-500">Tips</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Essential strategies and best practices for successful investing in the Indian stock market
          </p>
        </motion.div>

        {/* Featured Tip Carousel */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTipIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-r ${investmentTips[currentTipIndex].color} rounded-2xl p-8 text-white shadow-2xl`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  {React.createElement(investmentTips[currentTipIndex].icon, { className: "h-8 w-8" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{investmentTips[currentTipIndex].title}</h3>
                  <p className="opacity-90">{investmentTips[currentTipIndex].description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {investmentTips[currentTipIndex].tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTip}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTip}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {investmentTips.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTipIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTipIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {quickTips.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <section.icon className={`h-8 w-8 ${section.color}`} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Investment {section.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {section.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      section.title === "Do's" ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentTips;