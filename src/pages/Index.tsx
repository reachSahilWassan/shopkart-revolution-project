import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoriesSection from '@/components/CategoriesSection';
import { Button } from '@/components/ui/button';
import { ProductType } from '@/context/CartContext';

const Index: React.FC = () => {
  // Mock featured products data
  const featuredProducts: ProductType[] = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description: "Experience crystal-clear sound with our premium wireless headphones, featuring noise cancellation technology and long-lasting battery life.",
      category: "Electronics",
      rating: 4.8
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description: "Track your fitness goals with this smart watch that monitors heart rate, steps, sleep quality and more.",
      category: "Electronics",
      rating: 4.6
    },
    {
      id: 3,
      name: "Ultra HD 4K Smart TV - 55 inch",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
      description: "Transform your home entertainment with this 55-inch Ultra HD 4K smart TV featuring vibrant colors and smart connectivity.",
      category: "Electronics",
      rating: 4.5
    },
    {
      id: 4,
      name: "Designer Leather Handbag",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      description: "Elevate your style with this premium designer leather handbag, perfect for any occasion.",
      category: "Fashion",
      rating: 4.7
    }
  ];

  // Mock best sellers data
  const bestSellers: ProductType[] = [
    {
      id: 5,
      name: "Smartphone Pro Max 13",
      price: 1099.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9",
      description: "The latest flagship smartphone with cutting-edge features, incredible camera system and all-day battery life.",
      category: "Electronics",
      rating: 4.9
    },
    {
      id: 6,
      name: "Premium Coffee Maker",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1544098485-2a2ed6da40ba",
      description: "Brew barista-quality coffee at home with this premium coffee maker featuring multiple brewing options.",
      category: "Home & Kitchen",
      rating: 4.7
    },
    {
      id: 7,
      name: "Wireless Gaming Mouse",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217",
      description: "Take your gaming to the next level with this high-precision wireless gaming mouse with customizable RGB lighting.",
      category: "Electronics",
      rating: 4.6
    },
    {
      id: 8,
      name: "Ergonomic Office Chair",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1",
      description: "Work in comfort with this ergonomic office chair designed to provide optimal support during long working hours.",
      category: "Furniture",
      rating: 4.5
    }
  ];

  // Mock categories data
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
      count: 1254
    },
    {
      id: 2,
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
      count: 984
    },
    {
      id: 3,
      name: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
      count: 753
    },
    {
      id: 4,
      name: "Sports",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
      count: 521
    },
    {
      id: 5,
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
      count: 432
    },
    {
      id: 6,
      name: "Toys & Games",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
      count: 384
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts 
        title="Featured Products" 
        subtitle="Discover our handpicked selection of top products"
        products={featuredProducts} 
      />
      <CategoriesSection categories={categories} />
      <FeaturedProducts 
        title="Best Sellers" 
        subtitle="Our most popular products that customers love"
        products={bestSellers} 
      />
      
      {/* Special Offer Banner */}
      <section className="py-12 bg-shopkart-primary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Special Offers Just For You</h2>
              <p className="mb-6 text-white/80">
                Sign up now and get exclusive discounts on your first purchase.
                Plus, receive personalized recommendations based on your preferences.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-md focus:outline-none text-gray-800 flex-grow"
                />
                <Button 
                  type="submit" 
                  className="bg-shopkart-secondary hover:bg-shopkart-secondary/90 text-white px-6"
                >
                  Subscribe
                </Button>
              </form>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute top-0 right-0 -mt-6 -mr-6">
                <div className="bg-shopkart-secondary text-white text-lg font-bold py-2 px-4 rounded-full transform rotate-12">
                  50% OFF
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f" 
                alt="Special Offer" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-shopkart-background">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-shopkart-primary mb-2">What Our Customers Say</h2>
            <p className="text-gray-600">Discover why thousands of customers love shopping with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Verified Buyer",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                text: "I'm absolutely in love with the products I purchased. The quality exceeded my expectations and the delivery was super fast!"
              },
              {
                name: "Michael Brown",
                role: "Verified Buyer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                text: "ShopKart has become my go-to online store. Their customer service is exceptional, and their product range is impressive."
              },
              {
                name: "Jennifer Garcia",
                role: "Verified Buyer",
                image: "https://images.unsplash.com/photo-1499887142886-791eca5918cd",
                text: "The return process was seamless when I needed to exchange a product. Their team was helpful and resolved my issue promptly."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-shopkart-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: "🚚",
                title: "Fast Delivery",
                description: "Free shipping on orders over $50"
              },
              {
                icon: "🔒",
                title: "Secure Payments",
                description: "100% secure payment processing"
              },
              {
                icon: "↩️",
                title: "Easy Returns",
                description: "30-day money back guarantee"
              },
              {
                icon: "🎧",
                title: "24/7 Support",
                description: "Dedicated customer support"
              }
            ].map((feature, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-shopkart-primary mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
