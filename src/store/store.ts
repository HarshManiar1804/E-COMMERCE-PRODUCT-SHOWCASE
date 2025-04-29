import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState, CartState, FilterState, Product } from "../types";

interface StoreState {
  auth: AuthState;
  cart: CartState;
  filter: FilterState;
  setAuth: (user: AuthState["user"]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  setFilter: (filter: Partial<FilterState>) => void;
  clearCart: () => void;
  logout: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      auth: {
        user: null,
        isAuthenticated: false,
      },
      cart: {
        items: [],
        total: 0,
      },
      filter: {
        category: "",
        sortBy: "",
        searchQuery: "",
      },
      setAuth: (user) =>
        set((state) => {
          // Clear cart if username changes
          if (state.auth.user?.username !== user?.username) {
            return {
              auth: {
                user,
                isAuthenticated: !!user,
              },
              cart: {
                items: [],
                total: 0,
              },
            };
          }
          return {
            auth: {
              user,
              isAuthenticated: !!user,
            },
          };
        }),
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.items.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            return {
              cart: {
                items: state.cart.items.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
                total: state.cart.total + product.price,
              },
            };
          }
          return {
            cart: {
              items: [...state.cart.items, { ...product, quantity: 1 }],
              total: state.cart.total + product.price,
            },
          };
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const item = state.cart.items.find((item) => item.id === productId);
          if (!item) return state;
          return {
            cart: {
              items: state.cart.items.filter((item) => item.id !== productId),
              total: state.cart.total - item.price * item.quantity,
            },
          };
        }),
      updateQuantity: (productId, quantity) =>
        set((state) => {
          const item = state.cart.items.find((item) => item.id === productId);
          if (!item) return state;
          const oldTotal = item.price * item.quantity;
          const newTotal = item.price * quantity;
          return {
            cart: {
              items: state.cart.items.map((item) =>
                item.id === productId ? { ...item, quantity } : item
              ),
              total: state.cart.total - oldTotal + newTotal,
            },
          };
        }),
      setFilter: (filter) =>
        set((state) => ({
          filter: { ...state.filter, ...filter },
        })),
      clearCart: () =>
        set({
          cart: {
            items: [],
            total: 0,
          },
        }),
      logout: () => {
        localStorage.removeItem("user");
        set({
          auth: {
            user: null,
            isAuthenticated: false,
          },
          cart: {
            items: [],
            total: 0,
          },
        });
      },
    }),
    {
      name: "ecommerce-store",
    }
  )
);
