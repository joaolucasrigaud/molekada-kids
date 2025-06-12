import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Seção Hero Banner */}
      <section className="relative w-full h-[500px] bg-blue-light flex items-center justify-center">
        <div className="text-center text-blue-dark z-10">
          <h1 className="text-5xl font-bold font-heading mb-4">Vista a alegria de ser criança!</h1>
          <p className="text-xl mb-8">Conforto e estilo para os pequenos exploradores.</p>
          <Link href="/produtos" className="btn btn-primary">
            Ver Coleção
          </Link>
        </div>
      </section>

      {/* Seção de Categorias */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">Navegue por Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Placeholder para os Cards de Categoria */}
            <div className="text-center">Categoria 1</div>
            <div className="text-center">Categoria 2</div>
            <div className="text-center">Categoria 3</div>
            <div className="text-center">Categoria 4</div>
          </div>
        </div>
      </section>

      {/* Seção de Produtos em Destaque */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder para os Cards de Produto */}
            <div className="border p-4">Produto 1</div>
            <div className="border p-4">Produto 2</div>
            <div className="border p-4">Produto 3</div>
            <div className="border p-4">Produto 4</div>
          </div>
        </div>
      </section>
    </>
  );
}