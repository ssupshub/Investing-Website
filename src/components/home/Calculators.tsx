import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, BarChart3 } from 'lucide-react';

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('sip');
  const [sipData, setSipData] = useState({ amount: 5000, years: 10, rate: 12 });
  const [cagrData, setCagrData] = useState({ initial: 100000, final: 200000, years: 5 });
  const [intradayData, setIntradayData] = useState({ quantity: 100, buyPrice: 1000, sellPrice: 1050 });

  const calculateSIP = () => {
    const monthlyRate = sipData.rate / 12 / 100;
    const months = sipData.years * 12;
    const maturityAmount = sipData.amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const invested = sipData.amount * months;
    const returns = maturityAmount - invested;
    return { maturityAmount, invested, returns };
  };

  const calculateCAGR = () => {
    const cagr = ((cagrData.final / cagrData.initial) ** (1 / cagrData.years) - 1) * 100;
    const totalReturns = cagrData.final - cagrData.initial;
    return { cagr, totalReturns };
  };

  const calculateIntraday = () => {
    const pnl = (intradayData.sellPrice - intradayData.buyPrice) * intradayData.quantity;
    const percentage = ((intradayData.sellPrice - intradayData.buyPrice) / intradayData.buyPrice) * 100;
    return { pnl, percentage };
  };

  const sipResult = calculateSIP();
  const cagrResult = calculateCAGR();
  const intradayResult = calculateIntraday();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive <span className="text-blue-600">Calculators</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Calculate your investment returns with our powerful tools
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 space-x-2">
            {[
              { id: 'sip', label: 'SIP Calculator', icon: Calculator },
              { id: 'cagr', label: 'CAGR Calculator', icon: TrendingUp },
              { id: 'intraday', label: 'Intraday P&L', icon: BarChart3 }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            {activeTab === 'sip' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">SIP Calculator</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Monthly Investment (₹)
                      </label>
                      <input
                        type="number"
                        value={sipData.amount}
                        onChange={(e) => setSipData({...sipData, amount: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Investment Period (Years)
                      </label>
                      <input
                        type="number"
                        value={sipData.years}
                        onChange={(e) => setSipData({...sipData, years: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Expected Annual Return (%)
                      </label>
                      <input
                        type="number"
                        value={sipData.rate}
                        onChange={(e) => setSipData({...sipData, rate: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Results</h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total Invested</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{sipResult.invested.toLocaleString()}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total Returns</p>
                      <p className="text-2xl font-bold text-green-600">₹{sipResult.returns.toLocaleString()}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Maturity Amount</p>
                      <p className="text-2xl font-bold text-blue-600">₹{sipResult.maturityAmount.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cagr' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">CAGR Calculator</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Initial Investment (₹)
                      </label>
                      <input
                        type="number"
                        value={cagrData.initial}
                        onChange={(e) => setCagrData({...cagrData, initial: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Final Value (₹)
                      </label>
                      <input
                        type="number"
                        value={cagrData.final}
                        onChange={(e) => setCagrData({...cagrData, final: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Investment Period (Years)
                      </label>
                      <input
                        type="number"
                        value={cagrData.years}
                        onChange={(e) => setCagrData({...cagrData, years: parseInt(e.target.value) || 1})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Results</h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">CAGR</p>
                      <p className="text-2xl font-bold text-blue-600">{cagrResult.cagr.toFixed(2)}%</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total Returns</p>
                      <p className="text-2xl font-bold text-green-600">₹{cagrResult.totalReturns.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'intraday' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Intraday P&L Calculator</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        value={intradayData.quantity}
                        onChange={(e) => setIntradayData({...intradayData, quantity: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Buy Price (₹)
                      </label>
                      <input
                        type="number"
                        value={intradayData.buyPrice}
                        onChange={(e) => setIntradayData({...intradayData, buyPrice: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Sell Price (₹)
                      </label>
                      <input
                        type="number"
                        value={intradayData.sellPrice}
                        onChange={(e) => setIntradayData({...intradayData, sellPrice: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Results</h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">P&L</p>
                      <p className={`text-2xl font-bold ${intradayResult.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{intradayResult.pnl.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Return %</p>
                      <p className={`text-2xl font-bold ${intradayResult.percentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {intradayResult.percentage.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculators;