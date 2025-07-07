import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Heart, 
  Target, 
  Lightbulb,
  BookOpen,
  Calendar,
  MessageSquare,
  Star
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2020', event: 'Founded Brightway Investor', description: 'Started with a vision to democratize stock market education' },
    { year: '2021', event: 'First 1000 Students', description: 'Reached our first major milestone of helping 1000 investors' },
    { year: '2022', event: 'Weekly Webinars Launch', description: 'Started regular educational webinars for the community' },
    { year: '2023', event: 'Premium Services', description: 'Launched personalized mentorship and portfolio consultation' },
    { year: '2024', event: '10,000+ Happy Investors', description: 'Celebrating our growing community of successful investors' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We believe in transparent, honest guidance without any hidden agendas'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Our strategies are designed to deliver measurable investment outcomes'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously evolve our methods using latest market insights'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive ecosystem where investors learn and grow together'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students Trained', icon: Users },
    { number: '200+', label: 'Webinars Conducted', icon: Calendar },
    { number: '50+', label: 'Success Stories', icon: Star },
    { number: '95%', label: 'Client Satisfaction', icon: Heart }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-yellow-300">Brightway Investor</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Empowering individuals to achieve financial freedom through intelligent investment strategies and comprehensive market education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full inline-block mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Story Behind <span className="text-blue-600">Brightway Investor</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded by <strong>Rounak Sharma</strong> in 2020, Brightway Investor was born from a simple yet powerful vision: to make stock market education accessible to every Indian investor, regardless of their background or experience level.
                </p>
                <p>
                  After witnessing countless individuals struggle with market volatility and poor investment decisions, Rounak realized that the biggest barrier to successful investing wasn't lack of capital, but lack of proper knowledge and guidance.
                </p>
                <p>
                  What started as small educational sessions for friends and family has now grown into a comprehensive platform serving thousands of investors across India. Our mission remains unchanged: to bridge the gap between complex financial markets and everyday investors.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Rounak Sharma"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Makes Us <span className="text-blue-600">Different</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We don't just teach theory - we focus on practical, actionable strategies that deliver real results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Practical Approach",
                description: "Real-world strategies tested in actual market conditions",
                icon: BookOpen
              },
              {
                title: "Personalized Guidance",
                description: "Tailored advice based on your individual goals and risk profile",
                icon: Users
              },
              {
                title: "Continuous Support",
                description: "24/7 community support and regular market updates",
                icon: MessageSquare
              },
              {
                title: "Proven Track Record",
                description: "Consistent results with transparent performance metrics",
                icon: TrendingUp
              },
              {
                title: "Educational Focus",
                description: "Emphasis on understanding the 'why' behind every strategy",
                icon: Lightbulb
              },
              {
                title: "Risk Management",
                description: "Conservative approach prioritizing capital preservation",
                icon: Award
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our mission to democratize investment education
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-center mb-8 ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                }`}
              >
                <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg max-w-md ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-full inline-block mb-4">
                  <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;