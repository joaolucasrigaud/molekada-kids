import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  oldPrice,
  image,
  isNew,
}) => {
  return (
    <div className={styles.card}>
      <Link href={`/produtos/${id}`}>
        <div className={styles.imageContainer}>
          {isNew && <div className={styles.newBadge}>Novo</div>}
          <Image
            src={image}
            alt={name}
            fill
            className={styles.image}
          />
        </div>
      </Link>

      <div className={styles.info}>
        <h3 className="truncate">
          <Link href={`/produtos/${id}`} className={styles.name}>
            {name}
          </Link>
        </h3>
        <div className={styles.priceContainer}>
          <p className={styles.price}>
            R$ {price.toFixed(2).replace('.', ',')}
          </p>
          {oldPrice && (
            <p className={styles.oldPrice}>
              R$ {oldPrice.toFixed(2).replace('.', ',')}
            </p>
          )}
        </div>
      </div>

      <button className={styles.cartButton} aria-label="Adicionar ao carrinho">
        <ShoppingCart size={20} />
      </button>
    </div>
  );
};

export default ProductCard;