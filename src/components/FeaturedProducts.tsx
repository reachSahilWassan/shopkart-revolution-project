
import React from 'react';
import ProductCard from './ProductCard';
import { ProductType } from '@/context/CartContext';

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: ProductType[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  subtitle,
  products,
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-shopkart-primary mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
