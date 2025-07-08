"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"; // Importação correta
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dados 100% Locais
const categories = [
  {
    id: "meninas",
    name: "Meninas",
    image: "/images/categoria-meninas.png",
    color: "#ff69b4",
  },
  {
    id: "meninos",
    name: "Meninos",
    image: "/images/categoria-meninos.png",
    color: "#5fb8ff",
  },
  {
    id: "outlet",
    name: "Outlet",
    image: "/images/categoria-outlet.png",
    color: "#ff7a3d",
  },
];

const featuredProducts = [
  {
    id: "vestido-colorido",
    name: "Vestido Listrado Colorido",
    price: 79.9,
    image: "/images/produtos/vestido-colorido.jpg",
    sizes: ["4", "6", "8", "10"],
  },
  {
    id: "conjunto-menino",
    name: "Conjunto Moletom Verde",
    price: 89.9,
    image: "/images/produtos/conjunto-menino.jpg",
    sizes: ["2", "4", "6"],
  },
  {
    id: "look-verao",
    name: "Look Verão Praia",
    price: 69.9,
    image: "/images/produtos/look-verao.png",
    sizes: ["1", "2", "3"],
  },
  {
    id: "vestido-macaco",
    name: "Vestido Estampa Macaco",
    price: 59.9,
    image: "/images/produtos/vestido-macaco.jpeg",
    sizes: ["P", "M", "G"],
  },
];

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

export default function Home() {
  return (
    <>
      <section className={styles.heroSlider}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={false}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
