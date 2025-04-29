import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/store';
import { Trash2 } from 'lucide-react';

export const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();

  const handleCheckout = () => {
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  if (cart.items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      <div className="overflow-x-auto bg-white shadow rounded-md">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-left text-sm font-medium text-gray-700">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4 text-right">Price</th>
              <th className="p-4 text-center">Quantity</th>
              <th className="p-4 text-right">Total</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4 flex items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-12 h-12 object-contain mr-4"
                  />
                  <span className="text-sm text-gray-800">{item.title}</span>
                </td>
                <td className="p-4 text-right text-sm">${item.price}</td>
                <td className="p-4 text-center">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                  />
                </td>
                <td className="p-4 text-right text-sm">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-semibold">
          Total: ${cart.total.toFixed(2)}
        </p>
        <button
          onClick={handleCheckout}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-lg font-medium"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
