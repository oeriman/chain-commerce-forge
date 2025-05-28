
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      name: 'Ethereum Hoodie',
      store: 'CryptoWear',
      price: '0.05 ETH',
      usdPrice: '$89.99',
      image: '🦄',
      category: 'Fashion',
      likes: 234,
      featured: true
    },
    {
      name: 'Bitcoin Art Print',
      store: 'Digital Arts Hub',
      price: '0.02 ETH',
      usdPrice: '$35.99',
      image: '🎨',
      category: 'Art',
      likes: 156,
      featured: false
    },
    {
      name: 'DeFi Analytics Tool',
      store: 'DeFi Tools',
      price: '0.1 ETH',
      usdPrice: '$179.99',
      image: '📊',
      category: 'Software',
      likes: 89,
      featured: true
    },
    {
      name: 'Blockchain Guide',
      store: 'Blockchain Books',
      price: '0.01 ETH',
      usdPrice: '$19.99',
      image: '📚',
      category: 'Education',
      likes: 67,
      featured: false
    },
    {
      name: 'NFT Collection',
      store: 'Digital Arts Hub',
      price: '0.25 ETH',
      usdPrice: '$449.99',
      image: '🖼️',
      category: 'Art',
      likes: 345,
      featured: true
    },
    {
      name: 'Crypto Mug',
      store: 'CryptoWear',
      price: '0.015 ETH',
      usdPrice: '$26.99',
      image: '☕',
      category: 'Fashion',
      likes: 128,
      featured: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trending <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most popular items on our marketplace
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-sm overflow-hidden">
              <CardHeader className="pb-2">
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center text-6xl">
                  {product.image}
                  {product.featured && (
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600">by {product.store}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-purple-600">{product.price}</div>
                      <div className="text-sm text-gray-500">{product.usdPrice}</div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Heart className="w-4 h-4 mr-1" />
                      {product.likes}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
