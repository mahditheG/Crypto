import React from 'react';
import styles from './Coin.module.css'

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
     return (
          <div className={styles.container}>
               <img src={image} alt={name} className={styles.image} />
               <span className={styles.name}>{name}</span>
               <span className={styles.symbol}>{symbol.toUpperCase()}</span>
               <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
               <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)}%</span>
               <span className={styles}>$ {marketCap.toLocaleString()}</span>
          </div >
     );
};

export default Coin;