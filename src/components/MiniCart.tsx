import React from "react";
import { useCartStore } from "@/store/cartStore";
import styles from "./MiniCart.module.css";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const MiniCart: React.FC<MiniCartProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateItemQuantity } = useCartStore();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`${styles.miniCartContainer} ${isOpen ? styles.open : ""}`}>
      <div className={styles.miniCartHeader}>
        <h2>Sua Sacola ({items.length} itens)</h2>
        <button onClick={onClose} className={styles.closeButton}>
          <X size={24} />
        </button>
      </div>
      <div className={styles.miniCartBody}>
        {items.length === 0 ? (
          <p>Sua sacola está vazia.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id + item.size} className={styles.cartItem}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Tamanho: {item.size}</p>
                  <p>R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() =>
                        updateItemQuantity(
                          item.id,
                          item.size,
                          item.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateItemQuantity(
                          item.id,
                          item.size,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className={styles.removeItemButton}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.miniCartFooter}>
        <div className={styles.subtotal}>
          <span>Subtotal:</span>
          <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
        </div>
        <Link
          href="/carrinho"
          className={styles.checkoutButton}
          onClick={onClose}
        >
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default MiniCart;
