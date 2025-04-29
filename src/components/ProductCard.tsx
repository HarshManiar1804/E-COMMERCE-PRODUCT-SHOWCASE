import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/store';
import { ProductCardProps } from '../types';

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { auth, addToCart } = useStore();

  const handleAddToCart = () => {
    if (!auth.isAuthenticated) {
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition hover:shadow-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-contain p-2 bg-gray-100"
      />
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>
        <div className="mt-4">
          <p className="text-xl font-bold text-blue-600">${product.price}</p>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
