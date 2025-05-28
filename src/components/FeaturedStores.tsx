
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Verified } from 'lucide-react';

const FeaturedStores = () => {
  const stores = [
    {
      name: 'CryptoWear',
      description: 'Premium blockchain-themed apparel',
      rating: 4.9,
      products: 156,
      category: 'Fashion',
      verified: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Digital Arts Hub',
      description: 'NFT collections and digital artwork',
      rating: 4.8,
      products: 89,
      category: 'Art',
      verified: true,
      gradient: 'from-blue-500 to-emerald-500'
    },
    {
      name: 'DeFi Tools',
      description: 'Essential tools for DeFi traders',
      rating: 4.7,
      products: 23,
      category: 'Software',
      verified: true,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Blockchain Books',
      description: 'Educational content and guides',
      rating: 4.9,
      products: 67,
      category: 'Education',
      verified: false,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Stores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover top-rated stores from our merchant community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map((store, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-sm overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-full h-32 bg-gradient-to-r ${store.gradient} rounded-lg mb-4 flex items-center justify-center relative`}>
                  <div className="text-white text-2xl font-bold">
                    {store.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  {store.verified && (
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                      <Verified className="w-4 h-4 text-blue-500" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{store.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {store.category}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">{store.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{store.rating}</span>
                  </div>
                  <span>{store.products} products</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-200 transition-colors">
                  Visit Store
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Stores
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;
