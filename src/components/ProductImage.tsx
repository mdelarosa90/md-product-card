import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties
}

export const ProductImage = ({ img = noImage, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string = img;
  if (product.img) {
    imgToShow = product.img
  }
  return (
    <img src={imgToShow} alt="Product" className={`${styles.productImg} ${className}`} style={style} />
  )
}