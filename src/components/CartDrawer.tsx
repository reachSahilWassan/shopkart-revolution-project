
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    toggleCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    totalPrice
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={toggleCart}
      ></div>
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition ease-in-out duration-500">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-shopkart-primary flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Your Cart
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                  </span>
                </h2>
                <button
                  onClick={toggleCart}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-1">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                  <Button onClick={toggleCart} className="bg-shopkart-primary hover:bg-shopkart-primary/90">
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-6 flex">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="line-clamp-1">
                            <Link to={`/product/${item.id}`} className="hover:text-shopkart-primary">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{item.category}</p>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-gray-100"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-gray-100"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm font-medium text-shopkart-secondary hover:text-shopkart-primary"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between mb-2 text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
                <Button className="w-full bg-shopkart-secondary hover:bg-shopkart-secondary/90 mb-3 flex items-center justify-center">
                  Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={toggleCart}
                    className="text-sm text-shopkart-primary hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
