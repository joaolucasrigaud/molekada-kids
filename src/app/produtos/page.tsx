import ProductCard from '@/components/ProductCard';
import styles from './produtos.module.css';

const productsData = [
  { id: 'vestido-colorido', name: 'Vestido Listrado Colorido', price: 79.90, image: '/images/products/vestido-colorido.jpg' },
  { id: 'conjunto-menino', name: 'Conjunto Moletom Verde', price: 89.90, image: '/images/products/conjunto-menino.jpg' },
  { id: 'look-verao', name: 'Look Verão Praia', price: 69.90, image: '/images/products/look-verao.png' },
  { id: 'vestido-macaco', name: 'Vestido Estampa Macaco', price: 59.90, image: '/images/products/vestido-macaco.jpeg' },
  { id: 'camiseta-dinossauro', name: 'Camiseta Dinossauro', price: 49.90, image: '/images/products/camiseta-dinossauro.jpg' },
  { id: 'saia-florida', name: 'Saia Florida', price: 39.90, image: '/images/products/saia-florida.jpg' },
  { id: 'boneca-pano', name: 'Boneca de Pano', price: 99.90, image: '/images/products/boneca-pano.jpg' },
  { id: 'carrinho-brinquedo', name: 'Carrinho de Brinquedo', price: 29.90, image: '/images/products/carrinho-brinquedo.jpg' },
];

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <aside className={styles.filters}>
        <h2>Filtros</h2>
        <div className={styles.filterSection}>
          <h3>Categorias</h3>
          <ul>
            <li><input type="checkbox" /> Roupas</li>
            <li><input type="checkbox" /> Brinquedos</li>
            <li><input type="checkbox" /> Acessórios</li>
          </ul>
        </div>
        <div className={styles.filterSection}>
          <h3>Tamanho</h3>
          <ul>
            <li><input type="checkbox" /> P</li>
            <li><input type="checkbox" /> M</li>
            <li><input type="checkbox" /> G</li>
          </ul>
        </div>
        <div className={styles.filterSection}>
          <h3>Cor</h3>
          <ul>
            <li><input type="checkbox" /> Azul</li>
            <li><input type="checkbox" /> Rosa</li>
            <li><input type="checkbox" /> Verde</li>
          </ul>
        </div>
      </aside>
      <main className={styles.productList}>
        {productsData.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </main>
    </div>
  );
}


