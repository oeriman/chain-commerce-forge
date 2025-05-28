
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Store, Zap, Users, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50"></div>
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
            <Zap className="w-3 h-3 mr-1" />
            Now Live on Mainnet
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              On-Chain Commerce
            </span>
            <br />
            <span className="text-gray-900">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build, sell, and scale your business on the blockchain. Accept crypto payments, 
            reach global customers, and own your data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6">
              <Store className="w-5 h-5 mr-2" />
              Start Selling
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Users className="w-5 h-5 mr-2" />
              Browse Marketplace
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              No Setup Fees
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Instant Settlements
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Global Payments
            </div>
          </div>
        </div>
        
        {/* Hero Image/Demo */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2"></div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Create Store</h3>
                  <p className="text-sm text-gray-600">Launch in minutes</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Accept Crypto</h3>
                  <p className="text-sm text-gray-600">Instant payments</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Reach Customers</h3>
                  <p className="text-sm text-gray-600">Global marketplace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
