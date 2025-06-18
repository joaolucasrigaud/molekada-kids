"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, Heart, User } from "lucide-react";
import styles from "./Header.module.css";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import MiniCart from "./MiniCart"; // Import MiniCart

const Header = () => {
  const items = useCartStore((state) => state.items);
  const [totalItems, setTotalItems] = useState(0);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false); // State for MiniCart visibility

  useEffect(() => {
    setTotalItems(items.reduce((total, item) => total + item.quantity, 0));
  }, [items]);

  const handleCartIconClick = () => {
    setIsMiniCartOpen(true);
  };

  const handleCloseMiniCart = () => {
    setIsMiniCartOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navSection}>
          <Link href="/produtos/lancamentos" className={styles.navLink}>
            Lançamento
          </Link>
          <Link href="/produtos/meninas" className={styles.navLink}>
            Meninas
          </Link>
          <Link href="/produtos/meninos" className={styles.navLink}>
            Meninos
          </Link>
        </div>

        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logo.png"
              alt="Logo Molecada Kids"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
        </div>

        <div className={`${styles.navSection} ${styles.navSectionRight}`}>
          <div className={styles.searchBar}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="O que está buscando?"
              className={styles.searchInput}
            />
          </div>
          <div className={styles.iconGroup}>
            <Link href="/favoritos" className={styles.iconLink}>
              <Heart />
            </Link>
            <Link href="/login" className={styles.iconLink}>
              <User />
            </Link>
            <button
              onClick={handleCartIconClick}
              className={styles.iconLink}
              style={{
                position: "relative",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <ShoppingCart />
              {totalItems > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    backgroundColor: "#ff7a3d",
                    color: "white",
                    borderRadius: "50%",
                    width: 18,
                    height: 18,
                    fontSize: 11,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <MiniCart isOpen={isMiniCartOpen} onClose={handleCloseMiniCart} />
    </header>
  );
};

export default Header;
