import React from 'react';
import styles from './HooksPage.module.css';

 export function HooksPage(){
  const product = {
    image: 'https://via.placeholder.com/300',
    name: 'Product Name',
    description: 'This is a short description of the product.',
    price: '29.99'
  };

  function handelClick() {
    //Add to cart function
  }
  return (
    <div className={styles.product_card}>
      <img src={product.image} alt={product.name} className={styles.product_image} />
      <div className={styles.product_details}>
        <h2 className={styles.product_name}>{product.name}</h2>
        <p className={styles.product_description}>{product.description}</p>
        <div className={styles.product_price}>${product.price}</div>
        <button className={styles.add_to_cart_button} onClick={handelClick}>Add to Cart</button>
      </div>
    </div>
  );
};



