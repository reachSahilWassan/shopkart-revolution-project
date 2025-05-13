
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

type UserType = {
  id: string;
  email: string;
  name: string;
};

type AuthContextType = {
  user: UserType | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  toggleAuthModal: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isAuthModalOpen: false,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  toggleAuthModal: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('shopkart-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Mock authentication functions (would be replaced with real backend calls)
  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock validation
      if (!email.includes('@') || password.length < 6) {
        throw new Error("Invalid credentials");
      }
      
      // Mock successful login
      const mockUser = {
        id: `user-${Date.now()}`,
        email,
        name: email.split('@')[0],
      };
      
      setUser(mockUser);
      localStorage.setItem('shopkart-user', JSON.stringify(mockUser));
      setIsAuthModalOpen(false);
      toast.success(`Welcome back, ${mockUser.name}!`);
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock validation
      if (!email.includes('@') || password.length < 6) {
        throw new Error("Invalid credentials");
      }
      
      // Mock successful registration
      const mockUser = {
        id: `user-${Date.now()}`,
        email,
        name,
      };
      
      setUser(mockUser);
      localStorage.setItem('shopkart-user', JSON.stringify(mockUser));
      setIsAuthModalOpen(false);
      toast.success(`Welcome to ShopKart, ${name}!`);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shopkart-user');
    toast.success("Logged out successfully");
  };

  const toggleAuthModal = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isAuthModalOpen,
      loading,
      login,
      register,
      logout,
      toggleAuthModal,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
