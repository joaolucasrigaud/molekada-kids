
'use client';

import ProductCard from '@/components/ProductCard';

const newArrivalsData = [
  { id: 'novidade-1', name: 'Macacão Jeans Infantil', price: 129.90, image: '/images/products/macacao-jeans.jpg' },
  { id: 'novidade-2', name: 'Tênis de Led Colorido', price: 159.90, image: '/images/products/tenis-led.jpg' },
  { id: 'novidade-3', name: 'Conjunto Verão Tropical', price: 99.90, image: '/images/products/conjunto-tropical.jpg' },
  { id: 'novidade-4', name: 'Mochila Escolar Dinossauro', price: 89.90, image: '/images/products/mochila-dinossauro.jpg' },
];

export default function ReleasesPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2.5rem', color: '#343a40' }}>Últimos Lançamentos</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {newArrivalsData.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.1rem', color: '#6c757d' }}>
        Fique de olho para mais novidades em breve!
      </p>
    </div>
  );
}


