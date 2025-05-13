
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleCart, totalItems } = useCart();
  const { user, toggleAuthModal, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
    // Could redirect to search results page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl text-shopkart-primary">Shop<span className="text-shopkart-secondary">Kart</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-shopkart-secondary transition-colors">Home</Link>
          <Link to="/products" className="font-medium hover:text-shopkart-secondary transition-colors">Products</Link>
          <Link to="/categories" className="font-medium hover:text-shopkart-secondary transition-colors">Categories</Link>
          <Link to="/deals" className="font-medium hover:text-shopkart-secondary transition-colors">Deals</Link>
        </nav>

        {/* Search, Account, and Cart */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 lg:w-64 pl-8"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </form>

          {/* Account */}
          {user ? (
            <div className="relative group">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {user.name}
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 invisible group-hover:visible">
                <div className="py-2">
                  <Link to="/account" className="block px-4 py-2 text-sm hover:bg-muted">My Account</Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm hover:bg-muted">Orders</Link>
                  <button onClick={logout} className="w-full text-left px-4 py-2 text-sm hover:bg-muted">Sign Out</button>
                </div>
              </div>
            </div>
          ) : (
            <Button variant="ghost" size="sm" onClick={toggleAuthModal} className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Sign In
            </Button>
          )}

          {/* Cart */}
          <Button variant="ghost" size="sm" onClick={toggleCart} className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-shopkart-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleCart} className="relative mr-2">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-shopkart-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </form>
            
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium" onClick={toggleMenu}>Home</Link>
              <Link to="/products" className="font-medium" onClick={toggleMenu}>Products</Link>
              <Link to="/categories" className="font-medium" onClick={toggleMenu}>Categories</Link>
              <Link to="/deals" className="font-medium" onClick={toggleMenu}>Deals</Link>
              
              {user ? (
                <>
                  <Link to="/account" className="font-medium" onClick={toggleMenu}>My Account</Link>
                  <Link to="/orders" className="font-medium" onClick={toggleMenu}>Orders</Link>
                  <button onClick={() => { logout(); toggleMenu(); }} className="text-left font-medium">Sign Out</button>
                </>
              ) : (
                <button 
                  onClick={() => { toggleAuthModal(); toggleMenu(); }} 
                  className="text-left font-medium"
                >
                  Sign In
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
