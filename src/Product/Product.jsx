import styles from "./Product.module.css";
import star from "../icons/rating-star.svg";
import React from "react";
function Product({ product }) {

  return (
    <div>
      <div className={styles.product}>
        <div className={styles.image}>
          <img
            className={styles.image}
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productName}>{product.name}</span>
          <span className={styles.shortDescription}>{product.description}</span>
        </div>
        <div className={styles.productAtribute}>
          <div className={styles.infoField}>
            <span>Color</span>
            <span>{product.color}</span>
          </div>
          <div className={styles.infoField}>
            <span>Category</span>
            <span>{product.category}</span>
          </div>
          <div className={styles.infoField}>
            <span>Price</span>
            <span>{product.price}</span>
          </div>
          <div className={styles.infoField}>
            <span>Rating</span>
            <div className={styles.ratingBox}>
              <img className={styles.star} src={star}></img>
              <span>{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Product);
