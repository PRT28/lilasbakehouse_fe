'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import productsData from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useAlert } from '@/context/AlertContext';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  nutrition: string;
}

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams(); // ✅ works in client components
  const id = params?.id as string;

  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const { addToCart } = useCart();
  const { alertMessage } = useAlert();

  useEffect(() => {
    if (id) {
      const foundProduct = productsData.find((p) => p.id === id);
      setProduct(foundProduct);
      setLoading(false);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product.id, quantity);
    alertMessage('Item added to cart!', 'success');
  };

  if (loading) {
    return (
      <section className="py-16 px-6 text-center">
        <p className="text-lg text-gray-600">Loading product details...</p>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Product Not Found</h2>
        <button
          onClick={() => router.push('/products')}
          className="mt-6 bg-[#d4b29c] text-white px-6 py-3 rounded-full hover:bg-[#c2a08c]"
        >
          Back to Products
        </button>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img src={product.image} alt={product.name} className="w-full max-w-md rounded-lg shadow-md object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#6b4f4f] mb-4">{product.name}</h2>
          <p className="text-2xl font-bold text-[#d4b29c] mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#6b4f4f] mb-2">Ingredients:</h3>
            <p className="text-gray-700">{product.ingredients.join(', ')}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#6b4f4f] mb-2">Nutritional Information:</h3>
            <p className="text-gray-700">{product.nutrition}</p>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <label htmlFor="quantity" className="text-lg font-medium text-[#6b4f4f]">Quantity:</label>
            <input
              type="number"
              id="product-quantity"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#d4b29c] text-white px-8 py-3 rounded-full hover:bg-[#c2a08c]"
            >
              <FontAwesomeIcon icon={faCartPlus} className="mr-2" /> Add to Cart
            </button>
            <button
              onClick={() => router.push('/products')}
              className="border border-accent-peach text-[#d4b29c] px-8 py-3 rounded-full hover:bg-[#d4b29c] hover:text-[#fff]"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
