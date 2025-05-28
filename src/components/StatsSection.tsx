
import React from 'react';
import { TrendingUp, Store, Users, DollarSign } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Store,
      value: '10,000+',
      label: 'Active Stores',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Users,
      value: '500K+',
      label: 'Customers',
      gradient: 'from-blue-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      value: '$50M+',
      label: 'Volume Traded',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      gradient: 'from-teal-500 to-purple-500'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
