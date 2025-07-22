'use client'

import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products';

const ProductListingPage = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B4F4F] text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListingPage;