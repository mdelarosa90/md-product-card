import React, { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({className, style}: Props) => {
  // TODO: maxCount
  const {increaseBy, counter, maxCount} = useContext(ProductContext);

  // TODO: isMaxReached = useCallBack [count, maxCount]
  // TRUE si el count === maxCount
  // False si no lo es
  const isMaxReached = useCallback(() => {
    return !!maxCount && counter === maxCount;
  }, [maxCount, counter])
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button disabled={isMaxReached()} className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>+</button>
    </div>
  )
}