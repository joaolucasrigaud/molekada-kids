import React from "react";
import styles from "./StarRating.module.css";

interface StarRatingProps {
  rating: number; // Current rating (e.g., 3.5)
  maxStars?: number; // Maximum number of stars (default: 5)
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    let starClass = styles.starEmpty;
    if (rating >= i) {
      starClass = styles.starFull;
    } else if (rating > i - 1) {
      starClass = styles.starHalf;
    }
    stars.push(
      <span key={i} className={starClass}>
        &#9733;
      </span>
    );
  }

  return <div className={styles.starRating}>{stars}</div>;
};

export default StarRating;
