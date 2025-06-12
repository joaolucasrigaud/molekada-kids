import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';

// Dados para as categorias
const categories = [
  { id: 'meninas', name: 'Meninas', image: '/images/cat-meninas.jpg', color: '#ff69b4' }, // Rosa
  { id: 'meninos', name: 'Meninos', image: '/images/cat-meninos.jpg', color: '#5fb8ff' }, // Azul
  { id: 'outlet', name: 'Outlet', image: '/images/cat-outlet.jpg', color: '#ff7a3d' },  // Laranja
];

// Dados para os produtos em destaque
const featuredProducts = [
  { id: 'vestido-colorido', name: 'Vestido Listrado Colorido', price: 79.90, image: '/images/products/vestido-colorido.jpg', sizes: ['4', '6', '8', '10'] },
  { id: 'conjunto-menino', name: 'Conjunto Moletom Verde', price: 89.90, image: '/images/products/conjunto-menino.jpg', sizes: ['2', '4', '6'] },
  { id: 'look-verao', name: 'Look Verão Praia', price: 69.90, image: '/images/products/look-verao.png', sizes: ['1', '2', '3'] },
  { id: 'vestido-macaco', name: 'Vestido Estampa Macaco', price: 59.90, image: '/images/products/vestido-macaco.jpeg', sizes: ['P', 'M', 'G'] },
];

// Componente da Página Home
export default function Home() {
  return (
    <>
      {/* Seção Hero Banner */}
      <section className={styles.hero}>
        <div>
          <h1 className={styles.heroTitle}>Vista a alegria de ser criança!</h1>
          <p className={styles.heroSubtitle}>Conforto e estilo para os pequenos exploradores.</p>
          <Link href="/produtos" className={styles.heroButton}>
            Ver Coleção
          </Link>
        </div>
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