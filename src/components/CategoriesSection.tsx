
import React from 'react';
import { Link } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
  image: string;
  count: number;
};

interface CategoriesSectionProps {
  categories: Category[];
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories }) => {
  return (
    <section className="py-12 bg-shopkart-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-shopkart-primary mb-2">Shop By Category</h2>
          <p className="text-gray-600">Browse our wide range of product categories</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white font-medium text-lg text-center">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">{category.count} Products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
