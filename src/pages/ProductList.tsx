
import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductType } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { ChevronDown, ChevronUp, Filter, SlidersHorizontal } from 'lucide-react';

const ProductList: React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  
  // Mock products data
  const products: ProductType[] = [
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
    },
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
    },
    {
      id: 9,
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      description: "Stay hydrated with this eco-friendly stainless steel water bottle that keeps beverages cold for up to 24 hours.",
      category: "Sports & Outdoors",
      rating: 4.3
    },
    {
      id: 10,
      name: "Professional DSLR Camera",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c",
      description: "Capture stunning photos with this professional DSLR camera featuring advanced imaging technology and versatile lens compatibility.",
      category: "Electronics",
      rating: 4.8
    },
    {
      id: 11,
      name: "Bluetooth Portable Speaker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      description: "Enjoy rich, immersive sound anywhere with this portable Bluetooth speaker featuring long battery life and water resistance.",
      category: "Electronics",
      rating: 4.4
    },
    {
      id: 12,
      name: "Air Purifier with HEPA Filter",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1527433998178-a830731b3f9c",
      description: "Breathe cleaner air with this advanced air purifier that removes 99.97% of allergens and pollutants with its HEPA filter.",
      category: "Home & Kitchen",
      rating: 4.6
    }
  ];

  // Available categories, brands, and ratings for filters
  const categories = ["Electronics", "Fashion", "Home & Kitchen", "Furniture", "Sports & Outdoors"];
  const brands = ["Apple", "Samsung", "Sony", "LG", "Nike", "Adidas", "KitchenAid", "Dyson"];
  const ratings = [4, 3, 2, 1];

  // Filter toggles for mobile
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);
  const [ratingOpen, setRatingOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  const toggleCategory = () => {
    const updatedCategories = [...selectedCategories];
    return (category: string) => {
      const index = updatedCategories.indexOf(category);
      if (index === -1) {
        updatedCategories.push(category);
      } else {
        updatedCategories.splice(index, 1);
      }
      setSelectedCategories(updatedCategories);
    };
  };

  const toggleBrand = () => {
    const updatedBrands = [...selectedBrands];
    return (brand: string) => {
      const index = updatedBrands.indexOf(brand);
      if (index === -1) {
        updatedBrands.push(brand);
      } else {
        updatedBrands.splice(index, 1);
      }
      setSelectedBrands(updatedBrands);
    };
  };

  const toggleRating = () => {
    const updatedRatings = [...selectedRatings];
    return (rating: number) => {
      const index = updatedRatings.indexOf(rating);
      if (index === -1) {
        updatedRatings.push(rating);
      } else {
        updatedRatings.splice(index, 1);
      }
      setSelectedRatings(updatedRatings);
    };
  };

  // Filter sidebar component
  const FilterSidebar = () => (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="font-bold text-lg mb-4">Filters</h2>
      
      {/* Categories */}
      <div className="mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          <h3 className="font-semibold">Categories</h3>
          {categoryOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        
        {categoryOpen && (
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox 
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory()(category)}
                />
                <label 
                  htmlFor={`category-${category}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Brands */}
      <div className="mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => setBrandOpen(!brandOpen)}
        >
          <h3 className="font-semibold">Brands</h3>
          {brandOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        
        {brandOpen && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox 
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => toggleBrand()(brand)}
                />
                <label 
                  htmlFor={`brand-${brand}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Ratings */}
      <div className="mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => setRatingOpen(!ratingOpen)}
        >
          <h3 className="font-semibold">Customer Ratings</h3>
          {ratingOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        
        {ratingOpen && (
          <div className="space-y-2">
            {ratings.map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox 
                  id={`rating-${rating}`}
                  checked={selectedRatings.includes(rating)}
                  onCheckedChange={() => toggleRating()(rating)}
                />
                <label 
                  htmlFor={`rating-${rating}`}
                  className="text-sm text-gray-700 cursor-pointer flex items-center"
                >
                  {rating}+ stars
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => setPriceOpen(!priceOpen)}
        >
          <h3 className="font-semibold">Price Range</h3>
          {priceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        
        {priceOpen && (
          <div className="space-y-4">
            <Slider 
              defaultValue={[0, 1000]} 
              max={1000} 
              step={10} 
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as number[])}
            />
            <div className="flex justify-between items-center">
              <div className="w-[45%]">
                <Input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="text-sm"
                />
              </div>
              <span>-</span>
              <div className="w-[45%]">
                <Input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Button className="w-full bg-shopkart-primary hover:bg-shopkart-primary/90">Apply Filters</Button>
    </div>
  );

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-shopkart-primary mb-2">All Products</h1>
          <p className="text-gray-600">Browse our complete collection of products</p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Products List */}
          <div className="lg:col-span-3">
            {/* Sorting and Mobile Filter */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-2">Sort By:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mobile Filter Button */}
              <Button
                variant="outline"
                className="lg:hidden flex items-center"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Mobile Filters */}
            {mobileFiltersOpen && (
              <div className="lg:hidden mb-6">
                <FilterSidebar />
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-shopkart-primary text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <span className="mx-1">...</span>
                <Button variant="outline" size="sm">
                  10
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
