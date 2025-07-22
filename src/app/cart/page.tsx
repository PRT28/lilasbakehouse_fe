'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/context/CartContext';
import { useAlert } from '@/context/AlertContext';
import Link from 'next/link';

const CartPage = () => {
  const { cart, updateCartQuantity, removeFromCart } = useCart();
  const { alertMessage } = useAlert();

  const total = cart.reduce((sum: number, item) => sum + item.price * item.quantity, 0);

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
    alertMessage('Item removed from cart.', 'info');
  };

  const handleCheckout = () => {
    alertMessage('Checkout functionality not implemented yet!', 'info');
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-100 min-h-[calc(100vh-160px)]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6b4f4f] text-center mb-8">Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">
            Your cart is empty.{' '}
            <Link href="/products" className="text-[#d4b29c] hover:underline">
              Start shopping!
            </Link>
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                     
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-[#6b4f4f]">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) => updateCartQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-accent-peach focus:border-accent-peach"
                    />
                    <p className="text-lg font-semibold text-[#6b4f4f]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition duration-300"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end items-center mt-8 pt-4 border-t border-gray-200">
              <p className="text-2xl font-bold text-[#6b4f4f]">Total: ${total.toFixed(2)}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-end mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/products"  className="border border-accent-peach text-[#d4b29c] px-6 py-3 rounded-full hover:bg-[#d4b29c] hover:text-white transition duration-300 font-semibold text-center">
                Continue Shopping
              </Link>
              <button
                onClick={handleCheckout}
                className="bg-[#d4b29c] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#c2a08c] transition duration-300 font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
