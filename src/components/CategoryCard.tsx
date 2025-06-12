import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  name: string;
  image: string;
  link: string;
  color?: string; // Propriedade opcional para a cor de fundo do botão
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, link, color }) => {
  // Estilo dinâmico para o botão, se uma cor for fornecida
  const buttonStyle = color ? { backgroundColor: color } : {};

  return (
    <Link href={link} className={styles.card}>
      <Image
        src={image}
        alt={`Categoria ${name}`}
        fill
        className={styles.image}
      />
      <div className={styles.nameButton} style={buttonStyle}>
        {name}
      </div>
    </Link>
  );
};

export default CategoryCard;