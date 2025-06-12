import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import ProductCard from '@/components/ProductCard'; // 1. Importamos o nosso novo componente

// 2. Adicionamos a lista de produtos completa, com os tamanhos
const featuredProducts = [
  {
    id: 'vestido-colorido',
    name: 'Vestido Listrado Colorido',
    price: 79.90,
    image: '/images/products/vestido-colorido.jpg',
    sizes: ['4', '6', '8', '10'],
  },
  {
    id: 'conjunto-menino',
    name: 'Conjunto Moletom Verde',
    price: 89.90,
    image: '/images/products/conjunto-menino.jpg',
    sizes: ['2', '4', '6'],
  },
  {
    id: 'look-verao',
    name: 'Look Verão Praia',
    price: 69.90,
    image: '/images/products/look-verao.png',
    sizes: ['1', '2', '3'],
  },
  {
    id: 'vestido-macaco',
    name: 'Vestido Estampa Macaco',
    price: 59.90,
    image: '/images/products/vestido-macaco.jpeg',
    sizes: ['P', 'M', 'G'],
  },
];

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
        <div className="container-custom">
          <h2 className={styles.sectionTitle}>Navegue por Categorias</h2>
          <div className={styles.productGrid}>
            {/* Placeholder para os Cards de Categoria */}
            <div className="text-center p-4 border rounded-lg">Categoria 1</div>
            <div className="text-center p-4 border rounded-lg">Categoria 2</div>
            <div className="text-center p-4 border rounded-lg">Categoria 3</div>
            <div className="text-center p-4 border rounded-lg">Categoria 4</div>
          </div>
        </div>
      </section>

      {/* Seção de Produtos em Destaque */}
      <section className={`${styles.section} ${styles.productsSection}`}>
        <div className="container-custom">
          <h2 className={styles.sectionTitle}>Produtos em Destaque</h2>
          {/* 3. Substituímos os placeholders pelo nosso novo componente */}
          <div className={styles.productGrid}>
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