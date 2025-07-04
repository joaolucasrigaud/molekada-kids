"use client"; // <-- ESTA É A LINHA MAIS IMPORTANTE

import styles from "./page.module.css";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import ProductCard from "@/components/ProductCard"; // Import ProductCard

const productsData = [
  {
    id: "vestido-colorido",
    name: "Vestido Listrado Colorido",
    price: 79.9,
    image: "/images/products/vestido-colorido.jpg",
    sizes: ["4", "6", "8", "10"],
    description: "Um vestido alegre e confortável para o dia a dia.",
  },
  {
    id: "conjunto-menino",
    name: "Conjunto Moletom Verde",
    price: 89.9,
    image: "/images/products/conjunto-menino.jpg",
    sizes: ["2", "4", "6"],
    description: "Quentinho e estiloso para os meninos.",
  },
  {
    id: "look-verao",
    name: "Look Verão Praia",
    price: 69.9,
    image: "/images/products/look-verao.png",
    sizes: ["1", "2", "3"],
    description: "O look perfeito para um dia de sol.",
  },
  {
    id: "vestido-macaco",
    name: "Vestido Estampa Macaco",
    price: 59.9,
    image: "/images/products/vestido-macaco.jpeg",
    sizes: ["P", "M", "G"],
    description: "Divertido e fofo, com uma estampa que as crianças amam.",
  },
  {
    id: "camiseta-dinossauro",
    name: "Camiseta Dinossauro",
    price: 49.9,
    image: "/images/products/camiseta-dinossauro.jpg",
    sizes: ["2", "4", "6", "8"],
    description: "Camiseta divertida com estampa de dinossauro.",
  },
  {
    id: "saia-florida",
    name: "Saia Florida",
    price: 39.9,
    image: "/images/products/saia-florida.jpg",
    sizes: ["P", "M", "G"],
    description: "Saia leve e colorida para o verão.",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productsData.find((p) => p.id === slug);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const addItemToCart = useCartStore((state) => state.addItem);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho!");
      return;
    }
    addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: quantity,
    });
    alert(
      `${quantity}x ${product.name} (tamanho ${selectedSize}) adicionado ao carrinho!`
    );
  };

  // Mock data for 'Quem viu, viu também' section, excluding the current product
  const relatedProducts = productsData.filter((p) => p.id !== slug).slice(0, 4); // Get up to 4 related products

  return (
    <div className={styles.pageContainer}>
      <div className={styles.productGrid}>
        <div className={styles.imageGallery}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover", borderRadius: "0.5rem" }}
          />
        </div>
        <div className={styles.productInfo}>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            {product.name}
          </h1>
          <p
            style={{
              fontSize: "1.875rem",
              color: "#ff7a3d",
              margin: "1rem 0",
              fontWeight: "bold",
            }}
          >
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            {product.description}
          </p>

          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
              Tamanho:
            </h2>
            <div className={styles.sizeSelector}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeButton} ${
                    selectedSize === size ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
              Quantidade:
            </h2>
            <div className={styles.quantitySelector}>
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <input
                className={styles.quantityInput}
                type="number"
                value={quantity}
                readOnly
              />
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="btn btn-secondary"
            style={{ width: "100%", marginTop: "2rem" }}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {/* Seção 'Quem viu, viu também' */}
      <div className={styles.relatedProductsSection}>
        <h2 className={styles.relatedProductsTitle}>Quem viu, viu também</h2>
        <div className={styles.relatedProductsCarousel}>
          {relatedProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
