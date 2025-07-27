import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#6B4F4F] text-white py-8 px-6 md:px-12 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Lili's Bakehouse</h3>
          <p className="text-sm">Crafting healthy and delicious dry breads, muffins, and more with love and natural ingredients.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
            <li><Link href="/products" className="hover:text-gray-300 transition duration-300">Products</Link></li>
            <li><Link href="/about" className="hover:text-gray-300 transition duration-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300 transition duration-300">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FontAwesomeIcon icon={faFacebookF} className="text-2xl" /></a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FontAwesomeIcon icon={faTwitter} className="text-2xl" /></a>
          </div>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Lili&apos;s Bakehouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;