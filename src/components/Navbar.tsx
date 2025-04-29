import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../store/store';
import { ShoppingCart, LogIn, LogOut } from 'lucide-react';

export const Navbar = () => {
  const { auth, cart, logout } = useStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <RouterLink to="/" className="text-2xl font-bold">
            E-Commerce Store
          </RouterLink>

          <div className="flex items-center space-x-6">
            {auth.isAuthenticated ? (
              <>
                <span className="text-sm">Welcome, {auth.user?.firstName}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:underline"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <RouterLink
                to="/login"
                className="flex items-center space-x-1 hover:underline"
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </RouterLink>
            )}

            <RouterLink to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cart.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cart.items.length}
                </span>
              )}
            </RouterLink>

            <span className="text-sm">Total: ${cart.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
