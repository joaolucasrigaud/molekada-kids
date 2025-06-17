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
  const cardStyle = {
    "--category-color": color || "#333",
    backgroundImage: `url(${image})`,
  } as React.CSSProperties;

  return (
    <Link href={link} className={styles.card} style={cardStyle}>
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default CategoryCard;
