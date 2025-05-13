
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ProductType } from '@/context/CartContext';

interface ProductCardProps {
  product: ProductType;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400 mask-half-1" />
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400" />);
    }

    return stars;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  if (featured) {
    return (
      <div className="group relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-w-3 aspect-h-2">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-xl font-semibold text-white">{product.name}</h3>
            <div className="flex items-center mt-2 mb-3">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-white/80">{product.rating.toFixed(1)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-white">${product.price.toFixed(2)}</span>
              <Button 
                variant="secondary"
                size="sm"
                className="text-white"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-1" /> Add
              </Button>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-2 group-hover:text-shopkart-primary transition-colors">{product.name}</h3>
          <div className="flex items-center mt-1">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs text-gray-500 ml-1">{product.rating.toFixed(1)}</span>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <p className="font-semibold text-shopkart-primary">${product.price.toFixed(2)}</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-shopkart-secondary hover:text-white p-1 rounded-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
