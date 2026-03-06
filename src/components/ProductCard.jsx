import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
      {/* Product Image */}
      <div className="h-40 w-full flex items-center justify-center mb-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>
      
      {/* Product Title */}
      <h3 className="font-bold text-sm text-gray-800 line-clamp-2 mb-2">
        {product.title}
      </h3>
      
      {/* Product Price */}
      <p className="text-blue-600 font-bold mt-auto">
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;