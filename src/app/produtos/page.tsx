"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./produtos.module.css";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";

// Dados mockados com o novo serviço de placeholder
const allProducts = [
  {
    id: "conjunto-morango",
    name: "Conjunto Estampa Morangos",
    price: 89.9,
    images: ["https://i.imgur.com/gYd5Z2h.png"],
    category: "meninas",
  },
  {
    id: "vestido-colorido",
    name: "Vestido Listrado Colorido",
    price: 79.9,
    images: ["https://picsum.photos/seed/produto1/400/500"],
    category: "meninas",
  },
  {
    id: "conjunto-menino",
    name: "Conjunto Moletom Verde",
    price: 89.9,
    images: ["https://picsum.photos/seed/menino1/400/500"],
    category: "meninos",
  },
  {
    id: "camiseta-dinossauro",
    name: "Camiseta Dinossauro",
    price: 49.9,
    images: ["https://picsum.photos/seed/menino2/400/500"],
    category: "meninos",
  },
  {
    id: "saia-florida",
    name: "Saia Florida",
    price: 39.9,
    images: ["https://picsum.photos/seed/saia1/400/500"],
    category: "outlet",
  },
  {
    id: "look-verao",
    name: "Look Verão Praia",
    price: 69.9,
    images: ["https://picsum.photos/seed/produto3/400/500"],
    category: "meninas",
  },
  {
    id: "vestido-macaco",
    name: "Vestido Estampa Macaco",
    price: 59.9,
    images: ["https://picsum.photos/seed/produto4/400/500"],
    category: "outlet",
  },
];

export default function ProductListPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("categoria");

  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      let products = allProducts;
      if (categoryFilter) {
        products = allProducts.filter((p) => p.category === categoryFilter);
      }
      setFilteredProducts(products);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [categoryFilter]);

  const getCategoryTitle = () => {
    if (!categoryFilter) return "Todos os Produtos";
    return `Mostrando produtos para: ${
      categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)
    }`;
  };

  return (
    <div className={styles.container}>
      <aside className={styles.filters}>
        <h2>Filtros</h2>
        <div className={styles.filterSection}>
          <h3>Categoria</h3>
          <ul>
            <li>
              <a href="/produtos">Todos</a>
            </li>
            <li>
              <a href="/produtos?categoria=meninas">Meninas</a>
            </li>
            <li>
              <a href="/produtos?categoria=meninos">Meninos</a>
            </li>
            <li>
              <a href="/produtos?categoria=outlet">Outlet</a>
            </li>
          </ul>
        </div>
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>{getCategoryTitle()}</h1>
        <div className={styles.productList}>
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  // Garante que pegue a imagem correta, mesmo que a propriedade tenha outro nome
                  image={
                    product.images ? product.images[0] : (product as any).image
                  }
                />
              ))}
          {/* Mensagem caso não haja produtos */}
          {!loading && filteredProducts.length === 0 && (
            <p>Nenhum produto encontrado nesta categoria.</p>
          )}
        </div>
      </main>
    </div>
  );
}
