import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * A single item inside the cart
 * This represents "user intent", NOT inventory rules
 */
type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

/**
 * Cart store structure
 * - cart: list of items user wants to buy
 * - isOpen: UI state for cart drawer/modal
 * - actions: functions to mutate cart state
 */
type CartStore = {
  cart: CartItem[];
  isOpen: boolean;

  // Cart actions
  addToCart: (product: CartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;

  // UI actions
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;

  // Optional useful helper (you can use in UI)
  getTotalItems?: () => number;
};

/**
 * Zustand store with persistence (localStorage)
 * This keeps cart saved even after refresh
 */
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // =========================
      // STATE
      // =========================
      cart: [],
      isOpen: false,

      // =========================
      // UI ACTIONS
      // =========================

      openCart: () => set({ isOpen: true }),

      closeCart: () => set({ isOpen: false }),

      clearCart: () => set({ cart: [] }),

      // =========================
      // CART LOGIC
      // =========================

      /**
       * Add product to cart
       * - If item exists → increase quantity
       * - If not → add new item
       */
      addToCart: (product) =>
        set((state) => {
          const exists = state.cart.find((item) => item.id === product.id);

          return {
            isOpen: true,

            cart: exists
              ? state.cart.map((item) =>
                  item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + product.quantity,
                      }
                    : item,
                )
              : [...state.cart, product],
          };
        }),

      /**
       * Increase quantity by 1
       * IMPORTANT: no stock logic here (backend/UI handles that)
       */
      increaseQuantity: (productId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        })),

      /**
       * Decrease quantity by 1
       * - Ensures quantity never goes below 1
       * - Removes item if quantity becomes 0
       */
      decreaseQuantity: (productId) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productId
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      /**
       * Remove item completely from cart
       */
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      // =========================
      // OPTIONAL DERIVED DATA
      // =========================

      /**
       * Example helper:
       * Get total number of items in cart
       * Useful for badge counters in navbar
       */
      getTotalItems: () =>
        get().cart.reduce((sum, item) => sum + item.quantity, 0),
    }),
    {
      name: "cart-storage", // localStorage key
    },
  ),
);
