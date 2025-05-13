
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Minus, 
  Plus, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw, 
  Heart,
  ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  
  // Mock product data based on ID
  // In a real application, this would be fetched from an API
  const product = {
    id: parseInt(id || "1"),
    name: "Premium Wireless Headphones",
    price: 249.99,
    discount: 20, // Percentage discount
    originalPrice: 299.99,
    description: "Experience crystal-clear sound with our premium wireless headphones, featuring noise cancellation technology and long-lasting battery life. Perfect for music lovers and professionals alike, these headphones deliver exceptional audio quality and comfort for all-day wear.",
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone for calls",
      "Comfortable over-ear design",
      "Fast charging - 10min charge for 4 hours playback"
    ],
    specifications: {
      "Brand": "SoundElite",
      "Model": "WH-1000XM5",
      "Color": "Midnight Black",
      "Connectivity": "Wireless - Bluetooth 5.0",
      "Battery Life": "Up to 40 hours",
      "Weight": "250g",
      "Dimensions": "7.3 x 3.1 x 9.4 inches",
      "Warranty": "2 years"
    },
    stock: 15,
    rating: 4.8,
    reviewCount: 234,
    category: "Electronics",
    tags: ["headphones", "wireless", "audio", "bluetooth", "noise-cancelling"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944",
      "https://images.unsplash.com/photo-1578319439584-104c94d37305",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b"
    ]
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      description: product.description,
      category: product.category,
      rating: product.rating
    }, quantity);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 text-yellow-400 fill-yellow-400 mask-half-1" />
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded overflow-hidden border-2 ${
                    activeImage === index ? 'border-shopkart-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-shopkart-primary mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-shopkart-primary">${product.price.toFixed(2)}</span>
              {product.discount > 0 && (
                <>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-medium rounded">Save {product.discount}%</span>
                </>
              )}
            </div>
            
            <div className="border-t border-b py-4 border-gray-200">
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-shopkart-secondary"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Purchase Actions */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className={`px-3 py-1 ${quantity <= 1 ? 'text-gray-400' : 'text-gray-700'}`}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                    className={`px-3 py-1 ${quantity >= product.stock ? 'text-gray-400' : 'text-gray-700'}`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <span className="text-sm text-gray-500">
                  {product.stock} items available
                </span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="flex-1 bg-shopkart-secondary hover:bg-shopkart-secondary/90 text-white"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center border-shopkart-primary text-shopkart-primary hover:bg-shopkart-primary hover:text-white"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
              </div>
            </div>
            
            {/* Shipping Info */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-shopkart-background">
                  <Truck className="h-5 w-5 text-shopkart-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-gray-500">Orders over $50</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-shopkart-background">
                  <Shield className="h-5 w-5 text-shopkart-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">2-Year Warranty</p>
                  <p className="text-xs text-gray-500">Full coverage</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-shopkart-background">
                  <RefreshCw className="h-5 w-5 text-shopkart-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">30-Day Returns</p>
                  <p className="text-xs text-gray-500">No questions asked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="p-4 border rounded-md mt-2">
              <h3 className="font-semibold text-xl mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-4 border rounded-md mt-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-xl">Customer Reviews</h3>
                <Button className="bg-shopkart-primary hover:bg-shopkart-primary/90">Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    name: "Michael Brown",
                    date: "June 12, 2023",
                    rating: 5,
                    title: "Best headphones I've ever owned",
                    comment: "These headphones exceeded my expectations! The sound quality is incredible, and the noise cancellation is so effective that I can't hear anything else when I have them on. They're also very comfortable to wear for long periods."
                  },
                  {
                    name: "Sarah Johnson",
                    date: "May 28, 2023",
                    rating: 4,
                    title: "Great quality but a bit pricey",
                    comment: "The sound quality and comfort are excellent, and I love the long battery life. The only reason I'm giving 4 stars instead of 5 is the price point. They're definitely worth it, but they are on the expensive side."
                  },
                  {
                    name: "David Williams",
                    date: "April 15, 2023",
                    rating: 5,
                    title: "Amazing noise cancellation",
                    comment: "I use these headphones for work calls and listening to music. The noise cancellation feature has been a game-changer for me, especially when working from home with kids around! Very impressed with the quality."
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-none">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-lg">{review.title}</h4>
                        <div className="flex mt-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span>{review.date}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="font-medium text-shopkart-primary">{review.name}</span>
                      <p className="mt-2 text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="p-4 border rounded-md mt-2">
              <h3 className="font-semibold text-xl mb-4">Shipping & Returns</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-lg mb-2">Shipping Policy</h4>
                  <p className="text-gray-700">We offer free standard shipping on all orders over $50. Standard shipping typically takes 3-5 business days. Express shipping is available at checkout for an additional fee and typically delivers within 1-2 business days.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-2">Return Policy</h4>
                  <p className="text-gray-700">We offer a 30-day return policy on all products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. Products must be in their original packaging and in unused condition.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-2">Warranty</h4>
                  <p className="text-gray-700">This product comes with a 2-year manufacturer's warranty that covers defects in materials and workmanship. The warranty does not cover damage caused by misuse, accidents, or unauthorized repairs.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
