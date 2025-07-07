import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MarketTicker = () => {
  const marketData = [
    { symbol: 'NIFTY 50', price: '19,674.25', change: '+145.30', percent: '+0.74%', isUp: true },
    { symbol: 'SENSEX', price: '66,527.67', change: '+431.02', percent: '+0.65%', isUp: true },
    { symbol: 'RELIANCE', price: '2,456.80', change: '-23.45', percent: '-0.95%', isUp: false },
    { symbol: 'TCS', price: '3,987.25', change: '+47.85', percent: '+1.22%', isUp: true },
    { symbol: 'INFY', price: '1,678.90', change: '+15.20', percent: '+0.91%', isUp: true },
    { symbol: 'HDFCBANK', price: '1,645.75', change: '-8.90', percent: '-0.54%', isUp: false },
    { symbol: 'ICICIBANK', price: '987.45', change: '+12.30', percent: '+1.26%', isUp: true },
    { symbol: 'ADANIPORTS', price: '876.20', change: '-15.80', percent: '-1.77%', isUp: false },
  ];

  return (
    <div className="bg-gray-900 text-white py-4 overflow-hidden">
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-sm font-semibold px-4">LIVE MARKET UPDATES</span>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
      
      <motion.div
        className="flex space-x-8"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {marketData.concat(marketData).map((item, index) => (
          <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="font-semibold">{item.symbol}</span>
            <span className="text-gray-300">₹{item.price}</span>
            <div className={`flex items-center space-x-1 ${item.isUp ? 'text-green-400' : 'text-red-400'}`}>
              {item.isUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              <span className="text-sm">{item.change}</span>
              <span className="text-sm">({item.percent})</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarketTicker;