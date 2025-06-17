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

// --- DADOS DAS CATEGORIAS (COM CAMINHOS CORRIGIDOS) ---
const categories = [
  // CAMINHOS CORRIGIDOS para apontar para os arquivos na raiz da pasta /public
  {
    id: "meninas",
    name: "Meninas",
    image: "/categoria-meninas.png",
    color: "#ff69b4",
  },
  {
    id: "meninos",
    name: "Meninos",
    image: "/categoria-meninos.png",
    color: "#5fb8ff",
  },
  {
    id: "outlet",
    name: "Outlet",
    image: "/categoria-outlet.png",
    color: "#ff7a3d",
  },
];

// --- DADOS DOS PRODUTOS (COM CAMINHOS CORRIGIDOS) ---
const featuredProducts = [
  // CAMINHOS CORRIGIDOS para remover a subpasta /products que não existe
  {
    id: "vestido-colorido",
    name: "Vestido Listrado Colorido",
    price: 79.9,
    image: "/images/vestido-colorido.jpg",
    sizes: ["4", "6", "8", "10"],
  },
  {
    id: "conjunto-menino",
    name: "Conjunto Moletom Verde",
    price: 89.9,
    image: "/images/conjunto-menino.jpg",
    sizes: ["2", "4", "6"],
  },
  {
    id: "look-verao",
    name: "Look Verão Praia",
    price: 69.9,
    image: "/images/look-verao.png",
    sizes: ["1", "2", "3"],
  },
  {
    id: "vestido-macaco",
    name: "Vestido Estampa Macaco",
    price: 59.9,
    image: "/images/vestido-macaco.jpeg",
    sizes: ["P", "M", "G"],
  },
];

// --- DADOS DOS BANNERS ---
const banners = [
  {
    image: "/images/banner-meninas.png",
    link: "/produtos?categoria=meninas",
    alt: "Banner da coleção de roupas para meninas",
  },
  {
    image: "/images/banner-meninos.png",
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
          className={styles.swiperContainer}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <Link href={banner.link} className={styles.slideLink}>
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  quality={95}
                  style={{
                    objectFit: "contain",
                  }}
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
