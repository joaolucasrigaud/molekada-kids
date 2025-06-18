"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import styles from "./carrinho.module.css";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, increaseQuantity, decreaseQuantity, clearCart } =
    useCartStore();
  const [coupon, setCoupon] = useState("");
  const [sellerCode, setSellerCode] = useState("");
  const [cep, setCep] = useState("");
  const [calculatedShipping, setCalculatedShipping] = useState(0);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Mock de cálculo de frete
  const calculateShipping = () => {
    if (cep.length === 8) {
      // Simples validação de CEP
      setCalculatedShipping(25.0); // Valor fixo para demonstração
    } else {
      setCalculatedShipping(0);
    }
  };

  const discount = 0; // Lógica para cupom e código de vendedor seria implementada aqui
  const total = subtotal + calculatedShipping - discount;

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
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    objectFit="cover"
                  />
                </div>
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Tamanho: {item.size}</p>
                  <p>Preço: R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() => decreaseQuantity(item.id, item.size)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id, item.size)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className={styles.removeButton}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h2>Resumo do Pedido</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="coupon">Cupom de desconto:</label>
              <input
                type="text"
                id="coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Digite seu cupom"
              />
              <button>Aplicar</button>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="sellerCode">Código de Vendedor:</label>
              <input
                type="text"
                id="sellerCode"
                value={sellerCode}
                onChange={(e) => setSellerCode(e.target.value)}
                placeholder="Digite o código do vendedor"
              />
              <button>Aplicar</button>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="cep">Calcular Frete:</label>
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Digite seu CEP (apenas números)"
                maxLength={8}
              />
              <button onClick={calculateShipping}>Calcular</button>
            </div>

            <p>Subtotal: R$ {subtotal.toFixed(2).replace(".", ",")}</p>
            <p>Frete: R$ {calculatedShipping.toFixed(2).replace(".", ",")}</p>
            {discount > 0 && (
              <p>Desconto: - R$ {discount.toFixed(2).replace(".", ",")}</p>
            )}
            <h3>Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
            <button className={styles.checkoutButton}>Finalizar Compra</button>
            <button onClick={clearCart} className={styles.clearCartButton}>
              Limpar Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
