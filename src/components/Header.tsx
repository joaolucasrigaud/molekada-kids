import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import styles from './Header.module.css'; // <-- Importa o nosso novo CSS!

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Molecada Kids
        </Link>
        <div className={styles.links}>
          <Link href="/produtos" className={styles.navLink}>Produtos</Link>
          <Link href="/sobre" className={styles.navLink}>Sobre</Link>
          <Link href="/contato" className={styles.navLink}>Contato</Link>
          <Link href="/carrinho" className={styles.navLink}>
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;