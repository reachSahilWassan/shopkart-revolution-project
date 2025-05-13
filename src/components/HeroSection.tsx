
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-shopkart-primary to-blue-900 text-white pt-28 pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-shopkart-secondary/20 text-shopkart-secondary rounded-full text-sm font-medium">
              Summer Sale
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Discover Endless Shopping Possibilities
            </h1>
            <p className="text-lg text-white/80">
              Find everything you need, from fashion to electronics and home goods.
              Best quality products at unbeatable prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-shopkart-secondary hover:bg-shopkart-secondary/90 text-white"
              >
                <Link to="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-shopkart-primary"
              >
                <Link to="/deals">
                  View Deals
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-shopkart-secondary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="ShopKart Products" 
                className="w-full rounded-lg shadow-lg animate-slide-in"
              />
              <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4">
                <div className="bg-white rounded-lg p-4 shadow-lg w-40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-shopkart-primary">Products</span>
                    <span className="text-shopkart-secondary font-bold">10K+</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-shopkart-secondary"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2">
                <div className="bg-white rounded-lg p-4 shadow-lg w-40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-shopkart-primary">Customers</span>
                    <span className="text-shopkart-secondary font-bold">50K+</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-shopkart-secondary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-shopkart-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
