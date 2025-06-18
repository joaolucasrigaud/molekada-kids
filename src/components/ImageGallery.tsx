import React, { useState } from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productName }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.mainImage}>
        <Image
          src={mainImage}
          alt={productName}
          fill
          style={{ objectFit: "contain", borderRadius: "0.5rem" }}
        />
      </div>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnailItem} ${
              mainImage === image ? styles.selected : ""
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              width={80}
              height={80}
              style={{ objectFit: "cover", borderRadius: "0.3rem" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
