import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold font-heading text-orange-vibrant">
          Molecada Kids
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/produtos" className="hover:text-orange-vibrant">Produtos</Link>
          <Link href="/sobre" className="hover:text-orange-vibrant">Sobre</Link>
          <Link href="/contato" className="hover:text-orange-vibrant">Contato</Link>
          <Link href="/carrinho" className="relative">
            <ShoppingCart className="hover:text-orange-vibrant" />
            <span className="absolute -top-2 -right-2 bg-orange-vibrant text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;