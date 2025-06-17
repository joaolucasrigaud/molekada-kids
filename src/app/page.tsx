"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// As categorias continuarão vindo do Imgur, pois sabemos que funciona.
const categories = [
  {
    id: "meninas",
    name: "Meninas",
    image: "https://i.imgur.com/DyReB34.png",
    color: "#ff69b4",
  },
  {
    id: "meninos",
    name: "Meninos",
    image: "https://i.imgur.com/WrwCSIk.png",
    color: "#5fb8ff",
  },
  {
    id: "outlet",
    name: "Outlet",
    image: "https://i.imgur.com/dEqKIvV.png",
    color: "#ff7a3d",
  },
];

// Os produtos continuarão vindo do placeholder.
const featuredProducts = [
  {
    id: "vestido-colorido",
    name: "Vestido Listrado Colorido",
    price: 79.9,
    image: "https://placehold.co/400x500/EED7D1/734F40?text=Produto+1",
    sizes: ["4", "6", "8", "10"],
  },
  {
    id: "conjunto-menino",
    name: "Conjunto Moletom Verde",
    price: 89.9,
    image: "https://placehold.co/400x500/A8D8B9/3E664E?text=Produto+2",
    sizes: ["2", "4", "6"],
  },
  {
    id: "look-verao",
    name: "Look Verão Praia",
    price: 69.9,
    image: "https://placehold.co/400x500/F5D499/8C6D3B?text=Produto+3",
    sizes: ["1", "2", "3"],
  },
  {
    id: "vestido-macaco",
    name: "Vestido Estampa Macaco",
    price: 59.9,
    image: "https://placehold.co/400x500/D4B6A0/6B4F37?text=Produto+4",
    sizes: ["P", "M", "G"],
  },
];

// --- DADOS DOS BANNERS (ATUALIZADOS PARA CAMINHOS LOCAIS, COMO VOCÊ PEDIU) ---
const banners = [
  {
    image: "/images/banner-meninas.png", // Caminho local
    link: "/produtos?categoria=meninas",
    alt: "Banner da coleção de roupas para meninas",
  },
  {
    image: "/images/banner-meninos.png", // Caminho local
    link: "/produtos?categoria=meninos",
    alt: "Banner da coleção de roupas para meninos",
  },
];

// Componente da Página Home
export default function Home() {
  return (
    <>
      {/* Seção Hero com o Carrossel */}
      <section className={styles.heroSlider}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <Link href={banner.link}>
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  width={1920}
                  height={800}
                  quality={95}
                  className={styles.bannerImage}
                  priority={index === 0}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Seção de Categorias */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Navegue por Categorias</h2>
          <div className={styles.grid3cols}>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
                link={`/produtos?categoria=${category.id}`}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Produtos em Destaque */}
      <section className={`${styles.section} ${styles.productsSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Produtos em Destaque</h2>
          <div className={styles.grid4cols}>
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                sizes={product.sizes}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
