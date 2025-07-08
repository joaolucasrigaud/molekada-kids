"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import styles from "./page.module.css";
import { useCartStore } from "@/store/cartStore";

// Importando todos os nossos componentes de UI
import ProductCard from "@/components/ProductCard";
import ImageGallery from "@/components/ImageGallery";
import Breadcrumbs from "@/components/Breadcrumbs";
import StarRating from "@/components/StarRating";
import { Tabs, Tab } from "@/components/Tabs";
import ProductSkeleton from "@/components/ProductSkeleton";
import Toast from "@/components/Toast";

// --- CÓDIGO ATUALIZADO COM O NOVO PRODUTO ---
const productsData = [
  {
    id: "conjunto-morango",
    name: "CONJUNTO INFANTIL PRECOCE ESTAMPA CANTEIRO DE MORANGOS",
    price: 349.9,
    images: [
      "/images/produtos/LCJ5581-1.jpg",
      "/images/produtos/LCJ5581-2.jpg",
      "/images/produtos/LCJ5581-3.png",
      "/images/produtos/LCJ5581-4.png",
    ],
    sizes: ["2", "4", "6", "8"],
    description: `<strong>Seja bem-vindo!</strong>\n\n<strong>A doçura e a alegria dos moranguinhos em um look para encantar!</strong>\n\nEste conjunto da marca Precoce é a tradução perfeita de um dia de sol. Leve, fresco e com uma estampa que é pura fofura, ele foi desenhado para que sua pequena possa ser livre para ser criança. A combinação da blusinha charmosa com o short soltinho garante conforto e estilo para todas as brincadeiras.\n\n<strong>Detalhes que encantam:</strong>\n&bull; <strong>Conforto Puro do Algodão:</strong> Feito em tecido 100% algodão, garantindo um toque super macio e que deixa a pele respirar nos dias quentes.\n&bull; <strong>Estampa Exclusiva:</strong> A estampa "Canteiro de Morangos" é um design único da Precoce, com um ar de pintura feita à mão que é um charme.\n&bull; <strong>Modelagem Livre:</strong> O shortinho tem cós com elástico e modelagem soltinha, e a blusa tem um caimento leve, permitindo total liberdade de movimento.\n&bull; <strong>Charme nos Detalhes:</strong> A blusa conta com um babadinho delicado na barra e alças largas com uma estampa diferente que dá um toque especial.\n&bull; <strong>Praticidade para Vestir:</strong> O abotoamento nas costas da blusa e o elástico do short tornam a hora de se vestir muito mais fácil e rápida.\n\n<strong>Perfeito para:</strong>\n&bull; Um piquenique divertido no parque.\n&bull; Festinhas de aniversário durante o dia.\n&bull; Um passeio gostoso na sorveteria.\n&bull; Brincar muito e com estilo em qualquer dia de verão!\n\n<strong>Quem Somos?</strong>\nA MolekadaKids nasceu há mais de 5 anos do desejo de levar mais cor e diversão para o guarda-roupa infantil. Somos apaixonados por moda e entendemos que vestir uma criança é um ato de amor e cuidado. Por isso, cada peça em nossa loja é escolhida com o maior carinho, pensando no bem-estar e na liberdade de movimento que os pequenos precisam para brincar e explorar o mundo. Mais do que uma loja, queremos ser parceiros das famílias em todos os momentos especiais.`,
    composition: `<strong>Marca:</strong> Precoce\n<strong>Composição:</strong> 100% Algodão\n<strong>Contém:</strong> 1 Blusa e 1 Short\n<strong>Cuidados com a peça:</strong> Lavar com cores similares, não usar alvejante, passar em temperatura branda para preservar a estampa.`,
    rating: 4.9,
  },
  {
    id: "conjunto-flor-coracao",
    name: "CONJUNTO PRECOCE ESTAMPA FLOR CORAÇÃO GIZ DE CERA",
    price: 349.9, // Ajuste o preço se necessário
    images: [
      "/images/produtos/LCJ5585-1.jpg",
      "/images/produtos/LCJ5585-2.png",
    ],
    sizes: ["6", "8", "10", "12"], // Ajuste os tamanhos se necessário
    description: `<strong>Seja bem-vindo!</strong>\n\n<strong>Um look cheio de cor e atitude para as meninas mais estilosas!</strong>\n\nEste conjunto da marca Precoce é a escolha perfeita para quem ama um visual alegre e moderno. Com uma estampa vibrante que parece pintada com giz de cera, ele combina uma blusa charmosa com uma saia-short super prática. É o look ideal para que sua pequena se sinta livre, confortável e cheia de personalidade em qualquer ocasião.\n\n<strong>Detalhes que encantam:</strong>\n&bull; <strong>Conforto do Algodão:</strong> Feito em tecido 100% algodão, é leve, fresquinho e super macio na pele.\n&bull; <strong>Saia-Short 2 em 1:</strong> A saia possui um shortinho de malha costurado por baixo, garantindo total liberdade e segurança para pular e brincar sem preocupações.\n&bull; <strong>Estampa Exclusiva:</strong> O design "Flor Coração Giz de Cera" é uma criação única da Precoce, trazendo um toque artístico e divertido para a peça.\n&bull; <strong>Caimento Perfeito:</strong> A blusa tem um babado peplum que está super na moda, e a saia conta com elástico na parte de trás do cós para se ajustar confortavelmente ao corpo.\n&bull; <strong>Design Moderno:</strong> O decote reto e as alças largas da blusa criam um visual contemporâneo e cheio de estilo.\n\n<strong>Perfeito para:</strong>\n&bull; Uma festa com as amigas.\n&bull; Um passeio no shopping ou no cinema.\n&bull; Compor um look de aniversário cheio de cor.\n&bull; Expressar sua personalidade em qualquer dia de sol!\n\n<strong>Quem Somos?</strong>\nA MolekadaKids nasceu há mais de 5 anos do desejo de levar mais cor e diversão para o guarda-roupa infantil. Somos apaixonados por moda e entendemos que vestir uma criança é um ato de amor e cuidado. Por isso, cada peça em nossa loja é escolhida com o maior carinho, pensando no bem-estar e na liberdade de movimento que os pequenos precisam para brincar e explorar o mundo. Mais do que uma loja, queremos ser parceiros das famílias em todos os momentos especiais.`,
    composition: `<strong>Marca:</strong> Precoce\n<strong>Composição:</strong> 100% Algodão\n<strong>Contém:</strong> 1 Blusa e 1 Saia-Short`,
    rating: 5.0, // Ajuste a avaliação se necessário
  },
  {
    id: "conjunto-menino",
    name: "Conjunto Moletom Verde (Exemplo)",
    price: 129.9,
    images: [
      "https://picsum.photos/seed/menino1/800/1000",
      "https://picsum.photos/seed/menino2/800/1000",
    ],
    sizes: ["2", "4", "6"],
    description: "Quentinho e estiloso para os meninos aventureiros.",
    composition: "50% Algodão, 50% Poliéster.",
    rating: 4.8,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<(typeof productsData)[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const addItemToCart = useCartStore((state) => state.addItem);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const foundProduct = productsData.find((p) => p.id === slug);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedSize(null);
        setQuantity(1);
      } else {
        notFound();
      }
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return <ProductSkeleton />;
  }
  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setToastMessage("Por favor, selecione um tamanho!");
      return;
    }
    addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity: quantity,
    });
    setToastMessage(`${quantity}x ${product.name} adicionado ao carrinho!`);
  };

  const relatedProducts = productsData.filter((p) => p.id !== slug);
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Produtos", path: "/produtos" },
    { label: product.name, path: `/produtos/${product.id}` },
  ];

  // Função para formatar o texto com quebras de linha para HTML
  const formatTextForHtml = (text: string) => {
    return text.replace(/\n/g, "<br />");
  };

  return (
    <div className={styles.pageContainer}>
      <Toast
        message={toastMessage || ""}
        type="success"
        onClose={() => setToastMessage(null)}
        isVisible={!!toastMessage}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <div className={styles.productGrid}>
        <div className={styles.imageGallery}>
          <ImageGallery images={product.images} productName={product.name} />
        </div>
        <div className={styles.productInfo}>
          <h1>{product.name}</h1>
          {product.rating && <StarRating rating={product.rating} />}
          <p className={styles.productPrice}>
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
          <div className={styles.optionsSection}>
            <h2 className={styles.optionsTitle}>Tamanho:</h2>
            <div className={styles.sizeSelector}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeButton} ${
                    selectedSize === size ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.optionsSection}>
            <h2 className={styles.optionsTitle}>Quantidade:</h2>
            <div className={styles.quantitySelector}>
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <input
                className={styles.quantityInput}
                type="number"
                value={quantity}
                readOnly
              />
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <Tabs>
        <Tab label="Descrição">
          <div
            className={styles.tabText}
            dangerouslySetInnerHTML={{
              __html: formatTextForHtml(product.description),
            }}
          />
        </Tab>
        <Tab label="Composição">
          <div
            className={styles.tabText}
            dangerouslySetInnerHTML={{
              __html: formatTextForHtml(product.composition),
            }}
          />
        </Tab>
      </Tabs>
      <div className={styles.relatedProductsSection}>
        <h2 className={styles.relatedProductsTitle}>Quem viu, viu também</h2>
        <div className={styles.relatedProductsCarousel}>
          {relatedProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              image={p.images[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
