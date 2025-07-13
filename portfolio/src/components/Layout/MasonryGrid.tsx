import React from "react";
import styles from "./MasonryGrid.module.css";

interface MasonryImage {
  image: string;
  url?: string;
}

interface MasonryGridProps {
  images: (string | MasonryImage)[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  return (
    <div className={styles.masonryGrid}>
      {images.map((img, idx) => {
        const src = typeof img === "string" ? img : img.image;
        const url = typeof img === "string" ? undefined : img.url;
        const imgTag = <img src={src} alt={`Imagen ${idx + 1}`} />;
        return (
          <div className={styles.masonryItem} key={idx}>
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {imgTag}
              </a>
            ) : (
              imgTag
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MasonryGrid;