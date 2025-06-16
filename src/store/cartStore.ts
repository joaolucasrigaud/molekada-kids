import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (itemToAdd: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (itemId: string, size: string) => void;
  increaseQuantity: (itemId: string, size: string) => void;
  decreaseQuantity: (itemId: string, size: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (itemToAdd) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === itemToAdd.id && item.size === itemToAdd.size
          );
          if (existingItem) {
            const updatedItems = state.items.map((item) =>
              item.id === itemToAdd.id && item.size === itemToAdd.size
                ? { ...item, quantity: item.quantity + (itemToAdd.quantity || 1) }
                : item
            );
            return { items: updatedItems };
          } else {
            return { items: [...state.items, { ...itemToAdd, quantity: itemToAdd.quantity || 1 }] };
          }
        }),
      removeItem: (itemId, size) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === itemId && item.size === size)
          ),
        })),
      increaseQuantity: (itemId, size) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      decreaseQuantity: (itemId, size) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId && item.size === size
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // Nome da chave no localStorage
    }
  )
);


