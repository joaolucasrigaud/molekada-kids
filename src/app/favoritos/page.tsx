
'use client';

export default function FavoritesPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#343a40' }}>Meus Favoritos</h1>
        <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>Você ainda não adicionou nenhum item aos seus favoritos.</p>
        <p style={{ fontSize: '1.1rem', color: '#6c757d', marginTop: '0.5rem' }}>Explore nossos produtos e adicione seus preferidos!</p>
        <button
          style={{ backgroundColor: '#ff7a3d', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '2rem' }}
          onClick={() => window.location.href = '/produtos'}
        >
          Ver Produtos
        </button>
      </div>
    </div>
  );
}


