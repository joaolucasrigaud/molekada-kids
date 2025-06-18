import React from "react";
import styles from "./ProductSkeleton.module.css";

const ProductSkeleton: React.FC = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonDetails}>
        <div className={styles.skeletonTextLine}></div>
        <div className={styles.skeletonTextLine} style={{ width: "70%" }}></div>
        <div className={styles.skeletonTextLine} style={{ width: "50%" }}></div>
        <div
          className={styles.skeletonTextLine}
          style={{ width: "80%", height: "40px", marginTop: "20px" }}
        ></div>
        <div
          className={styles.skeletonTextLine}
          style={{ width: "60%", height: "40px", marginTop: "10px" }}
        ></div>
        <div
          className={styles.skeletonTextLine}
          style={{ width: "100%", height: "50px", marginTop: "30px" }}
        ></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
