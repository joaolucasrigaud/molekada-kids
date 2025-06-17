import Link from "next/link";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  name: string;
  image: string;
  link: string;
  color?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  link,
  color,
}) => {
  // Passa tanto a cor quanto a imagem de fundo como variáveis para o CSS
  const cardStyle = {
    "--category-color": color || "#333",
    backgroundImage: `url(${image})`,
  } as React.CSSProperties;

  return (
    <Link href={link} className={styles.card} style={cardStyle}>
      {/* O overlay e a imagem agora são controlados 100% pelo CSS */}
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default CategoryCard;
