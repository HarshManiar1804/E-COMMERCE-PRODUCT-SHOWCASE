import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from './components/Navbar';
import { ProductList } from './pages/ProductList';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { useStore } from './store/store';
import { useEffect } from 'react';

const queryClient = new QueryClient();

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useStore();
  return auth.isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App = () => {
  const { setAuth } = useStore();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { username, password } = JSON.parse(storedUser);
      setAuth({
        id: 1,
        username,
        email: `${username}@example.com`,
        firstName: username,
        lastName: 'User',
        gender: 'male',
        image: '',
        token: `${username}:${password}`,
      });
    }
  }, [setAuth]);

  return (
    <QueryClientProvider client={queryClient}>

      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
