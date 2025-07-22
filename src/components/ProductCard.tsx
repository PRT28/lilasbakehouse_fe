import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/context/CartContext';
import { useAlert } from '@/context/AlertContext';

// Define the product prop type
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { alertMessage } = useAlert();

  const handleAddToCart = () => {
    addToCart(product.id);
    alertMessage('Item added to cart!', 'success');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-[#6b4f4f] mb-2">{product.name}</h3>
      <p className="text-[#4b5563] text-sm mb-4">
        {product.description.split('.')[0]}.
      </p>
      <p className="text-2xl font-bold text-[#d4b29c] mb-4">
        ${product.price.toFixed(2)}
      </p>
      <div className="flex space-x-2">
        <Link className="bg-[#d4b29c] text-white px-6 py-2 rounded-full hover:bg-[#c2a08c] transition duration-300 font-semibold" href={`/products/${product.id}`}>
            View Details
        </Link>
        <button
          onClick={handleAddToCart}
          className="bg-[#6B4F4F] text-white px-6 py-2 rounded-full hover:bg-[#5a3e3e] transition duration-300 font-semibold"
        >
          <FontAwesomeIcon icon={faCartPlus} className="mr-2" /> Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
