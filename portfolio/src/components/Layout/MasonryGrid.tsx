import React from "react";
import styles from "./MasonryGrid.module.css";

interface MasonryGridProps {
  images: string[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  return (
    <div className={styles.masonryGrid}>
      {images.map((src, idx) => (
        <div className={styles.masonryItem} key={idx}>
          <img src={src} alt={`Imagen ${idx + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid; 