
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Organic Apples",
    category: "Fruits & Vegetables",
    price: 2.99,
    oldPrice: 3.99,
    image: "https://images.unsplash.com/photo-1569870499705-504209102861?q=80&w=2662&auto=format&fit=crop",
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Fresh Milk",
    category: "Dairy Products",
    price: 1.99,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=2072&auto=format&fit=crop",
    isNew: false,
    isSale: false,
  },
  {
    id: 3,
    name: "Premium Honey",
    category: "Organic Foods",
    price: 7.99,
    oldPrice: 9.99,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=2080&auto=format&fit=crop",
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Artisan Bread",
    category: "Bakery",
    price: 3.49,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
    isNew: true,
    isSale: false,
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Collections
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully selected premium products, sourced for quality and freshness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      SALE
                    </span>
                  )}
                </div>
                
                {/* Quick actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                
                {/* Add to cart button */}
                <div className="absolute inset-x-0 bottom-0 bg-white/95 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-primary text-white py-2 rounded-md flex items-center justify-center font-medium">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <div className="flex items-center">
                  <span className="font-semibold text-lg">${product.price}</span>
                  {product.oldPrice && (
                    <span className="ml-2 text-gray-500 line-through text-sm">${product.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 hover:border-primary text-gray-800 px-8 py-3 rounded-md font-medium inline-flex items-center group transition-colors duration-300">
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

export default FeaturedProducts;
