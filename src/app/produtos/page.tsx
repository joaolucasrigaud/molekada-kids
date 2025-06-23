"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState, useEffect } from "react"; // Import useEffect
import { useCartStore } from "@/store/cartStore";
import ProductCard from "@/components/ProductCard"; // Import ProductCard
import ImageGallery from "@/components/ImageGallery"; // Import ImageGallery
import Breadcrumbs from "@/components/Breadcrumbs"; // Import Breadcrumbs
import StarRating from "@/components/StarRating"; // Import StarRating
import { Tabs, Tab } from "@/components/Tabs"; // Import Tabs and Tab
import ProductSkeleton from "@/components/ProductSkeleton"; // Import ProductSkeleton
import Toast from "@/components/Toast"; // Import Toast

const productsData = [
  {
    id: "vestido-colorido",
    name: "Vestido Listrado Colorido",
    price: 79.9,
    images: [
      "/images/products/vestido-colorido.jpg",
      "/images/products/vestido-colorido-2.jpg",
      "/images/products/vestido-colorido-3.jpg",
    ],
    sizes: ["4", "6", "8", "10"],
    description: "Um vestido alegre e confortável para o dia a dia.",
    composition: "100% Algodão.",
    rating: 4.5,
  },
  {
    id: "conjunto-menino",
    name: "Conjunto Moletom Verde",
    price: 89.9,
    images: [
      "/images/products/conjunto-menino.jpg",
      "/images/products/conjunto-menino-2.jpg",
    ],
    sizes: ["2", "4", "6"],
    description: "Quentinho e estiloso para os meninos.",
    composition: "50% Algodão, 50% Poliéster.",
    rating: 3.8,
  },
  {
    id: "look-verao",
    name: "Look Verão Praia",
    price: 69.9,
    images: [
      "/images/products/look-verao.png",
      "/images/products/look-verao-2.png",
    ],
    sizes: ["1", "2", "3"],
    description: "O look perfeito para um dia de sol.",
    composition: "90% Viscose, 10% Elastano.",
    rating: 5.0,
  },
  {
    id: "vestido-macaco",
    name: "Vestido Estampa Macaco",
    price: 59.9,
    images: [
      "/images/products/vestido-macaco.jpeg",
      "/images/products/vestido-macaco-2.jpeg",
    ],
    sizes: ["P", "M", "G"],
    description: "Divertido e fofo, com uma estampa que as crianças amam.",
    composition: "100% Algodão.",
    rating: 4.2,
  },
  {
    id: "camiseta-dinossauro",
    name: "Camiseta Dinossauro",
    price: 49.9,
    images: [
      "/images/products/camiseta-dinossauro.jpg",
      "/images/products/camiseta-dinossauro-2.jpg",
    ],
    sizes: ["2", "4", "6", "8"],
    description: "Camiseta divertida com estampa de dinossauro.",
    composition: "100% Algodão.",
    rating: 3.5,
  },
  {
    id: "saia-florida",
    name: "Saia Florida",
    price: 39.9,
    images: [
      "/images/products/saia-florida.jpg",
      "/images/products/saia-florida-2.jpg",
    ],
    sizes: ["P", "M", "G"],
    description: "Saia leve e colorida para o verão.",
    composition: "100% Viscose.",
    rating: 4.0,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<(typeof productsData)[0] | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const addItemToCart = useCartStore((state) => state.addItem);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "info"
  );

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      const foundProduct = productsData.find((p) => p.id === slug);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        notFound();
      }
      setLoading(false);
    }, 1000); // Simulate 1 second loading time
  }, [slug]);

  if (loading) {
    return <ProductSkeleton />;
  }

  if (!product) {
    return null; // Should be handled by notFound() above
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setToastMessage("Por favor, selecione um tamanho!");
      setToastType("error");
      return;
    }
    addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0], // Use a primeira imagem como a principal para o carrinho
      size: selectedSize,
      quantity: quantity,
    });
    setToastMessage(
      `${quantity}x ${product.name} (tamanho ${selectedSize}) adicionado ao carrinho!`
    );
    setToastType("success");
  };

  // Mock data for 'Quem viu, viu também' section, excluding the current product
  const relatedProducts = productsData.filter((p) => p.id !== slug).slice(0, 4); // Get up to 4 related products

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Produtos", path: "/produtos" },
    { label: product.name, path: `/produtos/${product.id}` },
  ];

  return (
    <div className={styles.pageContainer}>
      <Breadcrumbs items={breadcrumbItems} />
      <div className={styles.productGrid}>
        <div className={styles.imageGallery}>
          <ImageGallery images={product.images} productName={product.name} />
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
          {product.rating && <StarRating rating={product.rating} />}
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

      <Tabs>
        <Tab label="Descrição">
          <p>{product.description}</p>
        </Tab>
        <Tab label="Composição">
          <p>{product.composition}</p>
        </Tab>
      </Tabs>

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
              image={p.images[0]} // Use a primeira imagem para o ProductCard
            />
          ))}
        </div>
      </div>
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
