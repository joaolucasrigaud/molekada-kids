
'use client';

import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import styles from './carrinho.module.css';

export default function CartPage() {
  const { items, removeItem, increaseQuantity, decreaseQuantity, clearCart } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 20.00 : 0; // Exemplo de frete
  const total = subtotal + shipping;

  return (
    <div className={styles.cartContainer}>
      <h1>Seu Carrinho</h1>
      {items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image src={item.image} alt={item.name} width={80} height={80} objectFit="cover" />
                </div>
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Tamanho: {item.size}</p>
                  <p>Preço: R$ {item.price.toFixed(2).replace('.', ',')}</p>
                  <div className={styles.quantityControl}>
                    <button onClick={() => decreaseQuantity(item.id, item.size)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id, item.size)}>+</button>
                  </div>
                  <button onClick={() => removeItem(item.id, item.size)} className={styles.removeButton}>Remover</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h2>Resumo do Pedido</h2>
            <p>Subtotal: R$ {subtotal.toFixed(2).replace('.', ',')}</p>
            <p>Frete: R$ {shipping.toFixed(2).replace('.', ',')}</p>
            <h3>Total: R$ {total.toFixed(2).replace('.', ',')}</h3>
            <button className={styles.checkoutButton}>Finalizar Compra</button>
            <button onClick={clearCart} className={styles.clearCartButton}>Limpar Carrinho</button>
          </div>
        </div>
      )}
    </div>
  );
}


