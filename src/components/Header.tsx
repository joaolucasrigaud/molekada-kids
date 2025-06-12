import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Search, Heart, User } from 'lucide-react'; // Novos ícones
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Seção da Esquerda: Links Principais */}
        <div className={styles.navSection}>
          <Link href="/produtos/lancamentos" className={styles.navLink}>Lançamento</Link>
          <Link href="/produtos/meninas" className={styles.navLink}>Meninas</Link>
          <Link href="/produtos/meninos" className={styles.navLink}>Meninos</Link>
        </div>

        {/* Seção Central: Logo */}
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logo.png"
              alt="Logo Molecada Kids"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
        </div>

        {/* Seção da Direita: Busca e Ícones */}
        <div className={`${styles.navSection} ${styles.navSectionRight}`}>
          <div className={styles.searchBar}>
            <Search size={18} className={styles.searchIcon} />
            <input type="text" placeholder="O que está buscando?" className={styles.searchInput} />
          </div>
          <div className={styles.iconGroup}>
            <Link href="/favoritos" className={styles.iconLink}><Heart /></Link>
            <Link href="/login" className={styles.iconLink}><User /></Link>
            <Link href="/carrinho" className={styles.iconLink}>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;