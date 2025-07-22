import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faAppleAlt, faLeaf } from '@fortawesome/free-solid-svg-icons';

const AboutUsPage: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6b4f4f] text-center mb-8">
          About Lili&apos;s Bakehouse
        </h2>
        
        {/* Our Story */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <img
            src="http://googleusercontent.com/file_content/3"
            alt="Our Story"
            className="rounded-lg shadow-md md:w-1/2 object-cover h-64"
            
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#6b4f4f] mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Lili&apos;s Bakehouse began with a simple yet profound idea: to create delicious baked goods
              that are also genuinely healthy. In a world full of processed foods, we wanted to offer a
              natural alternative, focusing on wholesome ingredients and traditional baking methods. Our
              journey started in a small home kitchen, driven by a passion for baking and a commitment to
              well-being.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8">
          <img
            src="http://googleusercontent.com/file_content/1"
            alt="Our Mission"
            className="rounded-lg shadow-md md:w-1/2 object-cover h-64"
            
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#6b4f4f] mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to bake with integrity, using only the finest wholewheat flour, natural
              sweeteners, and fresh produce. We believe that healthy eating should never compromise on
              taste. Every product from Lili&apos;s Bakehouse is a testament to our dedication to quality,
              ensuring you get nutritious and delicious treats every time.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-[#6b4f4f] mb-4">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary-cream p-6 rounded-lg shadow-sm">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="text-4xl text-[#d4b29c] mb-3" />
              <p className="font-medium text-[#6b4f4f]">Passion for Baking</p>
            </div>
            <div className="bg-secondary-cream p-6 rounded-lg shadow-sm">
              <FontAwesomeIcon icon={faAppleAlt} className="text-4xl text-[#d4b29c] mb-3" />
              <p className="font-medium text-[#6b4f4f]">Wholesome Ingredients</p>
            </div>
            <div className="bg-secondary-cream p-6 rounded-lg shadow-sm">
              <FontAwesomeIcon icon={faLeaf} className="text-4xl text-[#d4b29c] mb-3" />
              <p className="font-medium text-[#6b4f4f]">Natural &amp; Pure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
