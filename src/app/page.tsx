import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faSeedling,
  faHeart,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import productsData from '../data/products';

// Define product type (you can export this from a shared file too)
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

const LandingPage = () => {
  const featuredProducts: Product[] = productsData.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F8F3ED] py-16 md:py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B4F4F] leading-tight mb-4">
            The Craft in Caring
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
            Welcome to Lili&apos;s Bakehouse, where every bread and muffin tells a story
            of love, health, and handcrafted excellence. Our wholewheat,
            eggless dry breads and muffins are made with the finest natural
            ingredients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/products" className="bg-[#d4b29c] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#c2a08c] transition duration-300 font-semibold text-lg">
                Shop Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
            <Link className="border border-[#d4b29c] text-[#d4b29c] px-8 py-3 rounded-full shadow-md hover:bg-[#d4b29c] hover:text-white transition duration-300 font-semibold text-lg" href="/about">
                Our Story
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md h-64 flex items-center justify-center text-center text-gray-600 italic">
            <img
              src="/1.jpeg"
              alt="Fresh Baked Apple Cinnamon Loaf"
              className="rounded-lg shadow-md w-full h-[100%] object-cover"
              
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm text-gray-700 font-medium">
            Fresh Daily
            <br />
            Handcrafted with love
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B4F4F] mb-12">
          Why Choose Lili&apos;s?
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Every bread and muffin is a testament to our commitment to health,
          taste, and craftsmanship.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center">
            <FontAwesomeIcon icon={faSeedling} className="text-5xl text-[#d4b29c] mb-4" />
            <h3 className="text-xl font-semibold text-[#6B4F4F] mb-2">
              Wholewheat Goodness
            </h3>
            <p className="text-gray-600">
              Made with 100% wholewheat flour for natural nutrition.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center">
            <FontAwesomeIcon icon={faHeart} className="text-5xl text-[#d4b29c] mb-4" />
            <h3 className="text-xl font-semibold text-[#6B4F4F] mb-2">
              Eggless & Caring
            </h3>
            <p className="text-gray-600">
              Delicious breads and muffins that everyone can enjoy, made without
              eggs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center">
            <FontAwesomeIcon icon={faLeaf} className="text-5xl text-[#d4b29c] mb-4" />
            <h3 className="text-xl font-semibold text-[#6B4F4F] mb-2">
              Preservative-Free
            </h3>
            <p className="text-gray-600">
              Fresh, natural ingredients with no artificial preservatives.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Products Section */}
      <section className="bg-[#F8F3ED] py-16 md:py-24 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B4F4F] mb-12">
          Our Signature Breads & Muffins
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Discover our range of wholesome delights, perfect for a healthy snack
          or breakfast.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
                
              />
              <h3 className="text-xl font-semibold text-[#6b4f4f] mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description.split('.')[0]}.
              </p>
              <Link href={`/products/${product.id}`} className="bg-[#d4b29c] text-white px-6 py-2 rounded-full hover:bg-[#c2a08c] transition duration-300 font-semibold">
                  View Details
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/products" className="text-[#d4b29c] hover:underline font-semibold text-lg">
              View All Products <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#6B4F4F] py-16 md:py-24 px-6 md:px-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience the Difference?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Order now and taste the craft in caring that makes every bite special.
        </p>
        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-semibold text-xl inline-flex items-center"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl mr-3" />
          Order via WhatsApp
        </a>
      </section>
    </>
  );
};

export default LandingPage;
